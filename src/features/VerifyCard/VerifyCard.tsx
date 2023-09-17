"use client";

import {
  Alert,
  Box,
  Button,
  CardActions,
  CardContent,
  Fab,
  LinearProgress,
  Snackbar,
  Stack,
  Typography
} from "@mui/material";
import React, {useEffect, useMemo, useState} from "react";
import {default as NextLink} from 'next/link';
import {useTranslation} from "@/app/i18n/client";
import CkkCardType3 from "@/components/CkkCardType3";
import * as yup from 'yup';
import {useFormik} from "formik";
import {useMutation} from "@tanstack/react-query";
import requester from "@/tools/requester";
import LoadingButton from '@mui/lab/LoadingButton';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {MuiOtpInput} from "mui-one-time-password-input";
import {LtrTheme} from "@/tools/theme/ThemeRegistry";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export interface LoginFormValues{
  otp: string;
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

const otpStyles = (theme) => ({
  [theme.breakpoints.down(450)]: {
    gap: '2px!important'
  }
})
export function matchIsString(text){
  return typeof text === 'string';
}
export function matchIsNumeric(text) {
  const isNumber = typeof text === 'number'
  const isString = matchIsString(text)
  return (isNumber || (isString && text !== '')) && !isNaN(Number(text))
}

const validateChar = (value, index) => {
  return matchIsNumeric(value)
}

export interface VerifyCardProps{
  type: 'email' | 'mobile';
  username: string;
  token: string;
  onEdit: () => unknown,
  resendEndpoint?: string;
  submitEndpoint: string;
  submitLabel: string;
  onSuccess: (token: string) => unknown,
  successMessage?: string;
}
export default function VerifyCard(props: VerifyCardProps) {
  const {
    type,
    username,
    token,
    onEdit,
    resendEndpoint,
    submitEndpoint,
    submitLabel,
    onSuccess,
    successMessage
  } = props;
  const [t] = useTranslation();
  const [resendTimer, setResendTimer] = useState(45);
  useEffect(() => {
    if(resendTimer > 0){
      const interval = setInterval(() => {
        setResendTimer(resendTimer - 1);
      }, 1000)
      return () => clearInterval(interval);
    }
  }, [resendTimer]);
  let validationSchema = useMemo(() => {
    return yup.object({
      otp: yup
        .string('')
        .required(t('this_field_is_required'))
        .matches(
          /^([0-9]{6})$/,
          t('invalid_code'))
    })
  }, [])
  const mutation = useMutation((values) => {
    return requester.post(submitEndpoint, values);
  })
  const resendMutation = useMutation((values) => {
    return requester.post(resendEndpoint, values)
  })
  const formik = useFormik<LoginFormValues>({
    initialValues: { otp: ''},
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting }) => {
      mutation.mutate({
        otp: values.otp,
        token: token
      }, {
        onSuccess: (data, variables, context) => {
          onSuccess(data.data.data.token)
        },
        onSettled: (data, error, variables, context) => {
          setSubmitting(false);
        },
      });
    }
  })
  const handleComplete = () => {
    setTimeout(() => {
      formik.submitForm()
    }, 10)
  }
  const handleResend = () => {
    resendMutation.mutate({
      token: token
    }, {
      onSuccess: (data, variables, context) => {
        setResendTimer(90);
      },
    })
  }
  return (
    <>
      <CkkCardType3>
        {
          formik.isSubmitting && (
            <LinearProgress color="inherit" />
          )
        }
        <CardContent>
          <Box textAlign={'center'} mb={4}>
            <Fab color={'primary'}>
              {
                type === 'email' ? <AlternateEmailIcon /> : <PhoneIphoneIcon />
              }
            </Fab>
          </Box>
          <Typography variant={'h5'} fontWeight={'bold'} mb={1}>{type === 'email' ? t('check_your_email') : t('check_your_mobile')}</Typography>
          <Typography mb={1}>لطفاً کد تأیید ۶ رقمی  که به {username} ارسال شده است را وارد کنید.مدت اعتبار این کد ۵ دقیقه میباشد.</Typography>
          <Box>
            <Button
              onClick={onEdit}
              size={'small'}>
              {
                type === 'email' ?
                  t('edit_email') :
                  t('edit_mobile')
              }
            </Button>
          </Box>
        </CardContent>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
              <Box>
                <Box color={'error.main'} fontSize={'x-small'}>{formik.touched.otp && formik.errors.otp}</Box>
                <LtrTheme>
                  <MuiOtpInput
                    length={6}
                    value={formik.values.otp}
                    onChange={(newVal) => formik.setFieldValue('otp', newVal)}
                    autoFocus
                    sx={otpStyles}
                    TextFieldsProps={{
                      sx: {
                        '& .MuiInputBase-root': {
                          fontWeight: '900',
                          fontSize: '1.1rem',
                          color: 'primary.main',
                          borderColor: 'divider'
                        }
                      }
                    }}
                    validateChar={validateChar}
                    onComplete={handleComplete}
                  />
                </LtrTheme>
              </Box>
              <Stack spacing={2}>
                {formik.isSubmitting ? (
                  <LoadingButton loading variant="outlined">
                    Submit
                  </LoadingButton>
                ) : (
                  <Button fullWidth type={'submit'} variant={'contained'} color={'primary'}>{submitLabel}</Button>
                )}
              </Stack>
              {Boolean(resendEndpoint) && (
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                  <Typography>
                    {
                      type === 'email' ?
                        t('didnt_receive_email') :
                        t('didnt_receive_mobile')
                    }
                  </Typography>
                  {resendMutation.isLoading && (
                    <LoadingButton loading variant="outlined">
                      Submit
                    </LoadingButton>
                  )}
                  {!resendMutation.isLoading && (
                    <Button disabled={resendTimer > 0} size={'small'} onClick={handleResend}>
                      {t('resend')}
                      {resendTimer > 0 && (
                        <Box>({resendTimer})</Box>
                      )}
                    </Button>
                  )}
                </Stack>
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
        open={mutation.isError}
        key={'verify-failed-snackbar'}
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
        onClose={() => resendMutation.reset()}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={resendMutation.isError}
        key={'resend-failed-snackbar'}
      >
        <Alert severity="error" variant={'filled'} onClose={() => mutation.reset()} sx={{ width: '100%' }}>
          {errorsConvertor(resendMutation.error)}
        </Alert>
      </Snackbar>
      {resendMutation.isSuccess && (
        <Snackbar
          sx={{
            zIndex: 4000
          }}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={mutation.isSuccess}
          key={'resend-success-snackbar'}
        >
          <Alert severity="success" sx={{ width: '100%' }} variant={'filled'}>
            کد با موفقیت ارسال شد
          </Alert>
        </Snackbar>
      )}
      {mutation.isSuccess && (
        <Snackbar
          sx={{
            zIndex: 4000
          }}
          autoHideDuration={8000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={mutation.isSuccess}
          key={'verify-success-snackbar'}
        >
          <Alert severity="success" sx={{ width: '100%' }} variant={'filled'}>
            {successMessage}
          </Alert>
        </Snackbar>
      )}
    </>
  );
}