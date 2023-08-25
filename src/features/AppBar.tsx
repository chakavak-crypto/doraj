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
import ThemeSwitch from "@/features/ThemeSwitch";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export interface AppBarProps {
  onOpen?: (event: React.MouseEvent<HTMLElement>) => void
}

function ResponsiveAppBar(props: AppBarProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const matchesMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(openMainSideBar())
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{zIndex: 2000, bgcolor: 'inherit', color: 'text.primary'}} elevation={0}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box sx={{display: {xs: 'none', md: 'flex'}}}>
            <CkkLogoType1/>
          </Box>

          <Box sx={{display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{display: {xs: 'flex', md: 'none'}, flexGrow: 1}}>
            <CkkLogoType1/>
          </Box>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, ml: '110px'}}>
            <Greeting name={'حسین'}/>
          </Box>

          <Box sx={{flexGrow: 0, flexDirection: 'row', display: 'flex'}}>
            {matchesMdUp && (
              <Box sx={{mr: 5}}>
                <CkkAccountPopover/>
              </Box>
            )}
            <Box>
              <IconButton>
                <NotificationsIcon/>
              </IconButton>
            </Box>
            {!matchesMdUp && (
              <Box>
                <IconButton>
                  <PersonIcon/>
                </IconButton>
              </Box>
            )}
            {matchesMdUp && (
              <Box>
                <CkkThemeOptionsPopper themeSwitch={<ThemeSwitch size={'small'} />}/>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;