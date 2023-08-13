import * as React from 'react';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import {dir} from 'i18next';
import {cookies} from 'next/headers'
import {fallbackLng} from './i18n/settings'
import AppBar from "@/features/AppBar";
import MainSideBar from "@/features/MainSideBar/MainSideBar";
import FooterCard from "@/components/FooterCard";
import StoreRegistry from "@/tools/redux/StoreRegistry";

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

const DRAWER_WIDTH = 240;


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const lng = cookieStore.has('rabsana-lang') ? cookieStore.get('rabsana-lang')?.value : fallbackLng;
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <ThemeRegistry>
          <StoreRegistry>
            <AppBar />
            <MainSideBar width={DRAWER_WIDTH} open={false} />
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
            <FooterCard />
          </StoreRegistry>
        </ThemeRegistry>
      </body>
    </html>
  );
}
