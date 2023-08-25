'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import CkkLogoType1 from "@/components/CkkLogoType1/CkkLogoType1";
import ThemeSwitch from "@/features/ThemeSwitch";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export interface AppBarProps {
  onOpen?: (event: React.MouseEvent<HTMLElement>) => void
}

function SimpleAppBar(props: AppBarProps) {
  return (
    <AppBar position="fixed" sx={{
      zIndex: 2000,
      bgcolor: 'inherit',
      color: 'text.primary',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: (theme) => theme.palette.divider
    }} elevation={0}>
      <Container maxWidth={false}>
        <Toolbar sx={{minHeight: '48px!important'}} disableGutters>
          <Box sx={{flexGrow: 1}}>
            <CkkLogoType1/>
          </Box>
          <Box sx={{flexDirection: 'row', display: 'flex'}}>
            <ThemeSwitch size={'small'}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default SimpleAppBar;