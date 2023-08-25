import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LoginCard from "@/features/LoginCard";
import AuthImg from '@/assets/auth.svg';
import Image from "next/image";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'ورود به پنل کاربری'
}
export default function LoginPage() {
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
        <Box mr={5}>
          <LoginCard/>
        </Box>
        <Box sx={{display: {xs: 'none', md: 'block'}, maxWidth: 400}} ml={5}>
          <Image src={AuthImg} alt={'auth icon'} width={380}/>
        </Box>
      </Box>
    </Container>
  );
}
