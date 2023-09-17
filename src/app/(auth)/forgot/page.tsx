import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AuthImg from '@/assets/auth.svg';
import Image from "next/image";
import {Metadata} from "next";
import CkkForgotPasswordType1 from "@/features/CkkForgotPasswordType1";

export const metadata: Metadata = {
  title: 'فراموشی گذرواژه'
}
export default function SinUpPage() {
  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          my: 'auto',
        }}
      >
        <Box sx={{mr: {xs: 0, sm: 5}}}>
          <CkkForgotPasswordType1 />
        </Box>
        <Box sx={{display: {xs: 'none', md: 'block'}, maxWidth: 400, ml: {xs: 0, sm: 4}}}>
          <Image src={AuthImg} alt={'auth icon'} width={380}/>
        </Box>
      </Box>
    </Container>
  );
}
