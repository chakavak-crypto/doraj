"use client";

import {
  Alert,
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Collapse,
  IconButton,
  LinearProgress,
  Link,
  Snackbar,
  Stack,
  TextField,
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
import {useSearchParams} from 'next/navigation';
import LoadingButton from '@mui/lab/LoadingButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {LtrTheme} from "@/tools/theme/ThemeRegistry";

export interface LoginFormValues{
  email: string;
  mobile: string;
  password: string;
  referrer?: string;
  terms: boolean;
}
function mobileConvertor(str: string){
  return str.replaceAll(' ', '').replaceAll('+98', '0')
}
function errorsConvertor(error){
  if(error?.response?.data?.errors && Object.keys(error?.response?.data?.errors).length > 0){
    let errors = {};
    Object.keys(error?.response?.data?.errors).forEach((field) => {
      errors[field] = error?.response?.data?.errors[field][0]
    })
    return errors;
  }
  if(Boolean(error?.response?.data?.message)){
    return {
      general: error?.response?.data?.message
    };
  }

  return {
    general: error?.message
  };
}
interface SignupCardProps{
  onSuccess?: (type: 'email' | 'mobile', username: string, token: string) => unknown
}
//TODO email component, placeholder right, validation
//TODO extract components
export default function SignupCard(props: SignupCardProps) {
  const searchParams = useSearchParams()
  const givenReferrer = searchParams.has('r') ? searchParams.get('r') : '';
  const [method, setMethod] = useState<'email' | 'mobile'>('mobile')
  const [expandReferral, setExpandReferral] = useState<boolean>(Boolean(givenReferrer));
  const [t] = useTranslation();
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
        .required(t('this_field_is_required'))
        .matches(
          /(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
          t('please_select_strong_password')
        ),
      referrer: yup
        .string(''),
      terms: yup
        .bool().oneOf([true], t('please_accept_terms'))
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
        .required(t('this_field_is_required'))
        .matches(
          /(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                t('please_select_strong_password')
        ),
      referrer: yup
        .string(''),
      terms: yup
        .bool().oneOf([true], t('please_accept_terms'))
    });
  }, [method])
  const mutation = useMutation((values) => {
    return requester.post(ENDPOINTS.SIGNUP, values, {
      headers: {
        'DONT_FLATTEN_ERRORS': 1
      }
    });
  })
  const formik = useFormik<LoginFormValues>({
    initialValues: { password: '', email: '', mobile: '', referrer: givenReferrer as string, terms: false },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting, setErrors }) => {
      let data = {
        password: values.password,
        username: method === 'email' ? values.email : mobileConvertor(values.mobile),
        type: method,
      }
      if(Boolean(values.referrer)){
        data['referrer'] = values.referrer;
      }
      mutation.mutate(data, {
        onError: (error, variables, context) => {
          let convertedErrors = errorsConvertor(error);
          if(Boolean(convertedErrors['username'])){
            convertedErrors[method] = convertedErrors['username'];
            delete convertedErrors['username'];
          }
          setErrors(convertedErrors)
        },
        onSuccess: (d, variables, context) => {
          if(props.onSuccess){
            props.onSuccess(data.type, data.username, d.data.data.token)
          }
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
          title={t('create_user_account')}
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
                    <Stack direction={'row'} justifyContent={'space-between'}>
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
                  id={'password'}
                  name={'password'}
                  fullWidth
                  size={'small'}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  withStrengthMeter
                  sx={{
                    '& .MuiOutlinedInput-input': {
                      fontFamily: 'var(--roboto)'
                    }
                  }}
                />
              </Box>
              <Box>
                <Stack direction={'row'} spacing={0.5} alignItems={'center'} justifyContent={'space-between'}>
                  <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                    <Typography fontWeight={'bold'}>{t('referral_code')}</Typography>
                    <Typography color={'text.secondary'} fontSize={'smaller'}>({t('optional')})</Typography>
                    <IconButton tabIndex={-1} onClick={() => setExpandReferral(!expandReferral)} size={'small'}>
                      {expandReferral ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  </Stack>
                  <Box color={'error.main'} fontSize={'x-small'}>{formik.touched.referrer && formik.errors.referrer}</Box>
                </Stack>
                <Collapse in={expandReferral}>
                  <LtrTheme>
                    <TextField
                      id="referrer"
                      name="referrer"
                      value={formik.values.referrer}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.referrer && Boolean(formik.errors.referrer)}
                      variant="outlined"
                      size={'small'}
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-input': {
                          fontFamily: 'var(--roboto)'
                        }
                      }}
                    />
                  </LtrTheme>
                </Collapse>
              </Box>
              <Box>
                <Typography sx={{color: formik.touched.terms && Boolean(formik.errors.terms) ? 'error.main': 'inherit'}}>
                  <Checkbox
                    id={'terms'}
                    name={'terms'}
                    color={formik.touched.terms && Boolean(formik.errors.terms) ? 'error': 'primary'}
                    checked={formik.values.terms}
                    onChange={formik.handleChange}
                  /> <Link tabIndex={-1} component={NextLink} href={'/terms'} target="_blank" underline="none">{t('terms_and_conditions')}</Link> {t('i_read_terms')}
                </Typography>
              </Box>
              {formik.isSubmitting ? (
                <LoadingButton loading variant="outlined">
                  Submit
                </LoadingButton>
              ) : (
                <Button fullWidth type={'submit'} variant={'contained'} color={'info'}>{t('confirm')}</Button>
              )}
            </Stack>
          </form>
        </CardContent>
        <CardActions sx={{justifyContent: 'center'}}>
          <Typography component={'span'} color={'text.secondary'}>{t('already_have_account')}</Typography>
          <Link component={NextLink} href={'/login'} underline={'none'} px={1}>{t('login2')}</Link>
        </CardActions>
      </CkkCardType3>
      <Snackbar
        sx={{
          zIndex: 4000
        }}
        autoHideDuration={8000}
        onClose={() => mutation.reset()}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={Boolean(errorsConvertor(mutation.error)?.general)}
        key={'login-failed-snackbar'}
      >
        <Alert severity="error" variant={'filled'} onClose={() => mutation.reset()} sx={{ width: '100%' }}>
          {errorsConvertor(mutation.error)?.general}
        </Alert>
      </Snackbar>
    </>
  );
}