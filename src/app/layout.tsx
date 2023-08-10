import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { dir } from 'i18next';
import { cookies } from 'next/headers'
import {fallbackLng} from './i18n/settings'
import {Card, CardContent, Grid, Stack} from "@mui/material";
import AppBar from "@/features/AppBar";
import CkkDrawerType1 from "@/components/CkkDrawerType1";
import {useState} from "react";

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const lng = cookieStore.has('rabsana-lang') ? cookieStore.get('rabsana-lang')?.value : fallbackLng;
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <ThemeRegistry>
          <AppBar/>
          <CkkDrawerType1 width={DRAWER_WIDTH} open={true} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              ml: ['0', '0', `${DRAWER_WIDTH}px`],
              mt: ['48px', '56px', '64px'],
              mb: ['64px'],
              p: 3,
            }}
          >
            {children}
          </Box>
          <Card
            component="footer"
            sx={{
              position: 'fixed', bottom: 0, left: 0, right: 0
            }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item flexGrow={1}>تمامی حقوق برای رابسانا محفوظ است</Grid>
                <Grid item>تماس با ما</Grid>
                <Grid item>شرایط خدمات</Grid>
                <Grid item>حریم خصوصی</Grid>
              </Grid>
            </CardContent>
          </Card>
        </ThemeRegistry>
      </body>
    </html>
  );
}
