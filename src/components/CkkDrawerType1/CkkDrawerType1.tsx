'use client';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "next/link";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import {useTheme} from "@mui/material/styles";
import {Box, IconButton, Stack, useMediaQuery} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


const DRAWER_WIDTH = 240;

const LINKS = [
  { text: 'داشبورد', href: '/', icon: HomeIcon },
  { text: 'ثبت سفارش', href: '/starred', icon: StarIcon },
  { text: 'کیف پول', href: '/tasks', icon: ChecklistIcon },
  { text: 'تاریخچه سفارش ها', href: '/tasks', icon: ChecklistIcon },
  { text: 'حساب کاربری', href: '/tasks', icon: ChecklistIcon },
  { text: 'امنیت', href: '/tasks', icon: ChecklistIcon },
  { text: 'پشتیبانی', href: '/tasks', icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS = [
  { text: 'Settings', icon: SettingsIcon },
  { text: 'Support', icon: SupportIcon },
  { text: 'Logout', icon: LogoutIcon },
];

export interface CkkDrawerType1Props{
  width?: number;
  open: boolean;
}

export default function CkkDrawerType1(props: CkkDrawerType1Props){
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    matchesSM ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            zIndex: '2500',
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
          }}
        >
          <Stack direction='row' sx={{height: '100%'}}>
            <Box flexGrow={1}>foo</Box>
            <Box
              sx={{
                width: '60px',
                bgcolor: 'secondary.main'
              }}
            >
              <IconButton onClick={handleDrawerClose}><CloseIcon /></IconButton>
            </Box>
          </Stack>
        </Drawer>
      ) : (
      <Drawer
        sx={{
          width: props.width !== undefined ? props.width : DRAWER_WIDTH,
          display: { xs: 'none', md: 'block' },
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            top: ['48px', '56px', '64px'],
            bottom: ['48px', '56px', '64px'],
            height: 'auto',
            border: 0
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {LINKS.map(({ text, href, icon: Icon }) => (
            <ListItem key={href} disablePadding>
              <ListItemButton component={Link} href={href}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ mt: 'auto' }} />
        <List>
          {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      )
  );
}