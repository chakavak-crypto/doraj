import {Box, Stack, Typography} from "@mui/material";
import LogoLight from '@/assets/logo-light.png';
import Image from 'next/image'
import * as React from "react";

export default function CkkLogoType1(){
  return (
    <Stack direction={'row'} spacing={1}>
      <Box sx={{my: 'auto'}}>
        <Image
          src="/logo-light.png"
          width={24}
          height={24}
          alt="Logo"
        />
      </Box>
      <Box sx={{my: 'auto!important'}}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          چکاوک
        </Typography>
      </Box>
    </Stack>
  );
}