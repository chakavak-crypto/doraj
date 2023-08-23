'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import CkkAccountPopover from "@/components/CkkAccountPopover";
import CkkThemeOptionsPopper from "@/components/CkkThemeOptionsPopper";
import NotificationsIcon from '@mui/icons-material/Notifications';
import {useMediaQuery} from "@mui/material";
import Greeting from "@/components/Greeting";
import {useTheme} from "@mui/material/styles";
import PersonIcon from '@mui/icons-material/Person';
import {useAppDispatch} from "@/tools/redux/hooks";
import {openMainSideBar} from '@/features/MainSideBar/MainSideBarSlice';
import CkkLogoType1 from "@/components/CkkLogoType1/CkkLogoType1";
import ThemeSwitch from "@/components/ThemeSwitch";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export interface AppBarProps{
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
            <CkkLogoType1 />
          </Box>
          <Box sx={{ flexDirection: 'row', display: 'flex' }}>
            <ThemeSwitch size={'small'} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default SimpleAppBar;