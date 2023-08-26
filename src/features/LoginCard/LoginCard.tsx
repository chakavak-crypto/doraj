"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import PasswordInput from "@/components/PasswordInput";
import React, {useState} from "react";
import {default as NextLink} from 'next/link';
import CkkButtonSwitch from "@/components/CkkButtonSwitch";
import CkkMobileField from "@/components/CkkMobileField";
import CkkEmailField from "@/components/CkkEmailField";


//TODO email component, placeholder right, validation
//TODO extract components
//TODO change tabindex
//TODO validate inputs using formik
export default function LoginCard() {
  const [method, setMethod] = useState<'email' | 'mobile'>('mobile')
  const handleMethodChange = (newVal: 0 | 1) => {
    setMethod(newVal === 0 ? 'mobile' : 'email')
  };
  return (
    <Card
      sx={{
        maxWidth: 400,
        minWidth: 300,
        boxShadow: 'none',
        borderWidth: '1px',
        borderColor: (theme) => theme.palette.divider,
        borderStyle: 'solid',
        borderRadius: '16px',
        backgroundImage: (theme) => {
          if(theme.palette.mode === 'dark'){
            return `linear-gradient(45deg, ${theme.palette.background.default}, rgba(255, 255, 255, 0.12))`;
          }
          return 'none';
        }
      }}
    >
      <CardHeader
        title={'خوش آمدید'}
        titleTypographyProps={{
          fontWeight: 'bolder'
        }}
        subheader={'لطفا مشخصات خود را وارد کنید'}
      />
      <CardContent>
        <Stack spacing={2}>
          <CkkButtonSwitch
            value={method === 'mobile' ? 0 : 1}
            firstTitle={'موبایل'}
            secondTitle={'ایمیل'}
            onChange={handleMethodChange}
          />
          {
            method === 'mobile' && (
              <Box>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography>موبایل</Typography>
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
                  <Typography>ایمیل</Typography>
                </Stack>
                <CkkEmailField
                  fullWidth
                  size={'small'}
                  sx={{
                    '& .MuiOutlinedInput-input': {
                      fontFamily: 'var(--roboto)'
                    }
                  }}
                />
              </Box>
            )
          }
          <Box>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography>پسورد</Typography>
              <Link fontSize={'smaller'} component={NextLink} underline={'none'} href={'/forgot'}>رمز عبور را فراموش
                کرده ام</Link>
            </Stack>
            <PasswordInput
              fullWidth
              size={'small'}
            />
          </Box>
          <Button fullWidth variant={'contained'} color={'info'} size={'small'}>ورود</Button>
          <Button fullWidth variant={'outlined'} color={'secondary'} size={'small'}>با گوگل وارد شوید</Button>
        </Stack>
      </CardContent>
      <CardActions sx={{justifyContent: 'center'}}>
        <Typography component={'span'} color={'text.secondary'}>حساب کاربری ندارید؟</Typography>
        <Link component={NextLink} href={'/signup'} underline={'none'} px={1}>ثبت نام</Link>
      </CardActions>
    </Card>
  );
}