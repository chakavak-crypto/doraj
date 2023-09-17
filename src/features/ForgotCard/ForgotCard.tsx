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
import LoadingButton from '@mui/lab/LoadingButton';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export interface ForgotFormValues{
  email: string;
  mobile: string;
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
export default function ForgotCard(props: SignupCardProps) {
  const [method, setMethod] = useState<'email' | 'mobile'>('mobile')
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
    }) : yup.object({
      mobile: yup
        .string()
        .matches(
          /^\+98\s9([0-9]{2})\s([0-9]{3})\s([0-9]{4})$/,
          t('enter_valid_phone_number')
        )
        .required(t('this_field_is_required')),
    });
  }, [method])
  const mutation = useMutation((values) => {
    return requester.post(ENDPOINTS.FORGOT, values, {
      headers: {
        'DONT_FLATTEN_ERRORS': 1
      }
    });
  })
  const formik = useFormik<ForgotFormValues>({
    initialValues: { email: '', mobile: '' },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting, setErrors }) => {
      let data = {
        username: method === 'email' ? values.email : mobileConvertor(values.mobile),
        type: method,
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
          title={t('recover_password')}
          titleTypographyProps={{
            fontWeight: 'bolder'
          }}
          subheader={t('we_send_a_code_for_recovery')}
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
          <Button
            component={NextLink}
            href={'/login'}
            color={'secondary'}
            endIcon={<ArrowBackIcon />}
          >{t('return_to_login')}</Button>
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