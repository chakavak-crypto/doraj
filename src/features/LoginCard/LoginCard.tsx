"use client";

import {
  Alert,
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  LinearProgress,
  Link,
  Snackbar,
  Stack,
  Typography
} from "@mui/material";
import PasswordInput from "@/components/PasswordInput";
import React, {useMemo, useState} from "react";
import {default as NextLink} from 'next/link';
import CkkButtonSwitch from "@/components/CkkButtonSwitch";
import CkkMobileField from "@/components/CkkMobileField";
import CkkEmailField from "@/components/CkkEmailField";
import {useTranslation} from "@/app/i18n/client";
import CkkCardType3 from "@/components/CkkCardType3";
import * as yup from 'yup';
import {useFormik} from "formik";
import {useMutation} from "@tanstack/react-query";
import requester from "@/tools/requester";
import {ENDPOINTS} from "@/tools/constants";
import {useRouter} from 'next/navigation';
import LoadingButton from '@mui/lab/LoadingButton';

export interface LoginFormValues{
  email: string;
  mobile: string;
  password: string;
}
function mobileConvertor(str: string){
  return str.replaceAll(' ', '').replaceAll('+98', '0')
}
function errorsConvertor(error){
  if(error?.response?.data?.errors){
    return error?.response?.data?.errors[0];
  }
  return error?.message;
}
//TODO email component, placeholder right, validation
//TODO extract components
//TODO change tabindex
//TODO validate inputs using formik
export default function LoginCard() {
  const [method, setMethod] = useState<'email' | 'mobile'>('mobile')
  const [t] = useTranslation();
  const router = useRouter();
  const handleMethodChange = (newVal: 0 | 1) => {
    setMethod(newVal === 0 ? 'mobile' : 'email')
  };
  let validationSchema = useMemo(() => {
    return method === 'email' ? yup.object({
      email: yup
        .string('')
        .email(t('enter_valid_email'))
        .required(t('this_field_is_required')),
      password: yup
        .string('')
        .required(t('this_field_is_required')),
    }) : yup.object({
      mobile: yup
        .string()
        .matches(
          /^\+98\s9([0-9]{2})\s([0-9]{3})\s([0-9]{4})$/,
          t('enter_valid_phone_number')
        )
        .required(t('this_field_is_required')),
      password: yup
        .string('')
        .required(t('this_field_is_required')),
    });
  }, [method])
  const mutation = useMutation((values) => {
    return requester.post(ENDPOINTS.LOGIN, values);
  })
  const formik = useFormik<LoginFormValues>({
    initialValues: { password: '', email: '', mobile: '' },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting }) => {
      let data = {
        password: values.password,
        username: method === 'email' ? values.email : mobileConvertor(values.mobile)
      }
      mutation.mutate(data, {
        onSuccess: (data, variables, context) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        },
        onSettled: (data, error, variables, context) => {
          setSubmitting(false);
        },
      });
    }
  })
  return (
    <>
      <CkkCardType3>
        {
          formik.isSubmitting && (
            <LinearProgress color="inherit" />
          )
        }
        <CardHeader
          title={t('welcome')}
          titleTypographyProps={{
            fontWeight: 'bolder'
          }}
          subheader={t('please_enter_your_credentials')}
        />
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
              <CkkButtonSwitch
                value={method === 'mobile' ? 0 : 1}
                firstTitle={t('mobile')}
                secondTitle={t('email')}
                onChange={handleMethodChange}
              />
              {
                method === 'mobile' && (
                  <Box>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                      <Typography fontWeight={'bold'}>{t('mobile')}</Typography>
                      <Box color={'error.main'} fontSize={'x-small'}>{formik.touched.mobile && formik.errors.mobile}</Box>
                    </Stack>
                    <CkkMobileField
                      id="mobile"
                      name="mobile"
                      size={'small'}
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-input': {
                          fontFamily: 'var(--roboto)'
                        }
                      }}
                      value={formik.values.mobile}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                    />
                  </Box>
                )
              }
              {method === 'email' && (
                <Box>
                  <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography fontWeight={'bold'}>{t('email')}</Typography>
                    <Box color={'error.main'} fontSize={'x-small'}>{formik.touched.email && formik.errors.email}</Box>
                  </Stack>
                  <CkkEmailField
                    id={'email'}
                    name={'email'}
                    fullWidth
                    size={'small'}
                    sx={{
                      '& .MuiOutlinedInput-input': {
                        fontFamily: 'var(--roboto)'
                      }
                    }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                  />
                </Box>
              )}
              <Box>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                  <Typography fontWeight={'bold'}>{t('password')}</Typography>
                  <Box color={'error.main'} fontSize={'x-small'}>{formik.touched.password && formik.errors.password}</Box>
                </Stack>
                <PasswordInput
                  name={'password'}
                  fullWidth
                  size={'small'}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                />
              </Box>
              <Stack direction={'row'} justifyContent={'end'} sx={{mt: '2px!important'}}>
                <Link tabIndex={-1} fontSize={'smaller'} component={NextLink} underline={'none'}
                      href={'/forgot'}>{t('i_forget_my_password')}</Link>
              </Stack>
              {formik.isSubmitting ? (
                <LoadingButton loading variant="outlined">
                  Submit
                </LoadingButton>
              ) : (
                <Button fullWidth type={'submit'} variant={'contained'} color={'info'}>{t('login')}</Button>
              )}
            </Stack>
          </form>
        </CardContent>
        <CardActions sx={{justifyContent: 'center'}}>
          <Typography component={'span'} color={'text.secondary'}>{t('still_not_registered')}</Typography>
          <Link component={NextLink} href={'/signup'} underline={'none'} px={1}>{t('signup')}</Link>
        </CardActions>
      </CkkCardType3>
      <Snackbar
        sx={{
          zIndex: 4000
        }}
        autoHideDuration={8000}
        onClose={() => mutation.reset()}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={mutation.isError}
        key={'login-failed-snackbar'}
      >
        <Alert severity="error" variant={'filled'} onClose={() => mutation.reset()} sx={{ width: '100%' }}>
          {errorsConvertor(mutation.error)}
        </Alert>
      </Snackbar>
      <Snackbar
        sx={{
          zIndex: 4000
        }}
        autoHideDuration={8000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={mutation.isSuccess}
        key={'login-success-snackbar'}
      >
        <Alert severity="success" sx={{ width: '100%' }} variant={'filled'}>
          {t('success_login_redirecting')}
        </Alert>
      </Snackbar>
    </>
  );
}