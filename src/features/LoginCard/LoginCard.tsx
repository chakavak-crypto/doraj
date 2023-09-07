"use client";

import {Box, Button, CardActions, CardContent, CardHeader, Link, Stack, Typography} from "@mui/material";
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



//TODO email component, placeholder right, validation
//TODO extract components
//TODO change tabindex
//TODO validate inputs using formik
export default function LoginCard() {
  const [method, setMethod] = useState<'email' | 'mobile'>('mobile')
  const [t] = useTranslation();
  const validationSchema = useMemo(() => {
    return yup.object({
      email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
      password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    });
  }, [method]);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handleMethodChange = (newVal: 0 | 1) => {
    setMethod(newVal === 0 ? 'mobile' : 'email')
  };
  return (
    <CkkCardType3>
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
                  <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography>{t('mobile')}</Typography>
                  </Stack>
                  <CkkMobileField
                    id="mobile"
                    size={'small'}
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-input': {
                        fontFamily: 'var(--roboto)'
                      }
                    }}
                  />
                </Box>
              )
            }
            {
              method === 'email' && (
                <Box>
                  <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography>{t('email')}</Typography>
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
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Box>
              )
            }
            <Box>
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography>{t('password')}</Typography>
                <Link fontSize={'smaller'} component={NextLink} underline={'none'}
                      href={'/forgot'}>{t('i_forget_my_password')}</Link>
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
                helperText={formik.touched.password && formik.errors.password}
              />
            </Box>
            <Button fullWidth type={'submit'} variant={'contained'} color={'info'}>{t('login')}</Button>
          </Stack>
        </form>
      </CardContent>
      <CardActions sx={{justifyContent: 'center'}}>
        <Typography component={'span'} color={'text.secondary'}>{t('still_not_registered')}</Typography>
        <Link component={NextLink} href={'/signup'} underline={'none'} px={1}>{t('signup')}</Link>
      </CardActions>
    </CkkCardType3>
  );
}