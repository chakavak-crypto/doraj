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
import PasswordInput from "@/components/PasswordInput";
import React, {useMemo} from "react";
import {default as NextLink} from 'next/link';
import {useTranslation} from "@/app/i18n/client";
import CkkCardType3 from "@/components/CkkCardType3";
import * as yup from 'yup';
import {useFormik} from "formik";
import {useMutation} from "@tanstack/react-query";
import requester from "@/tools/requester";
import {ENDPOINTS} from "@/tools/constants";
import LoadingButton from '@mui/lab/LoadingButton';
import KeyIcon from '@mui/icons-material/Key';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export interface ResetPasswordFormValues{
  password: string;
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
interface NewPasswordCardProps{
  token: string;
  onSuccess?: () => unknown
}
//TODO email component, placeholder right, validation
//TODO extract components
export default function NewPasswordCard(props: NewPasswordCardProps) {
  const [t] = useTranslation();
  const {
    token,
    onSuccess
  } = props;

  let validationSchema = useMemo(() => {
    return yup.object({
      password: yup
        .string('')
        .required(t('this_field_is_required'))
        .matches(
          /(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
          t('please_select_strong_password')
        ),
    });
  }, [])
  const mutation = useMutation((values) => {
    return requester.post(ENDPOINTS.RESET_PASSWORD, values, {
      headers: {
        'DONT_FLATTEN_ERRORS': 1
      }
    });
  })
  const formik = useFormik<ResetPasswordFormValues>({
    initialValues: { password: '' },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting, setErrors }) => {
      let data = {
        password: values.password,
        token: token
      }

      mutation.mutate(data, {
        onError: (error, variables, context) => {
          setErrors(errorsConvertor(error))
        },
        onSuccess: (d, variables, context) => {
          if(onSuccess){
            onSuccess()
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
        <CardContent>
          <Box textAlign={'center'} mb={4}>
            <Fab color={'primary'}><KeyIcon /></Fab>
          </Box>
          <Typography variant={'h5'} fontWeight={'bold'} mb={1}>{t('set_new_password')}</Typography>
          <Typography mb={1}>{t('set_new_password_message')}</Typography>
        </CardContent>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
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
              {formik.isSubmitting ? (
                <LoadingButton loading variant="outlined">
                  Submit
                </LoadingButton>
              ) : (
                <Button fullWidth type={'submit'} variant={'contained'} color={'info'}>{t('change_password')}</Button>
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
        key={'reset-password-failed-snackbar'}
      >
        <Alert severity="error" variant={'filled'} onClose={() => mutation.reset()} sx={{ width: '100%' }}>
          {errorsConvertor(mutation.error)?.general}
        </Alert>
      </Snackbar>
      <Snackbar
        sx={{
          zIndex: 4000
        }}
        autoHideDuration={8000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={mutation.isSuccess}
        key={'reset-password-success-snackbar'}
      >
        <Alert severity="success" sx={{ width: '100%' }} variant={'filled'}>
          {t('reset_password_success_redirecting')}
        </Alert>
      </Snackbar>
    </>
  );
}