import * as React from 'react';
import Box from '@mui/material/Box';
import ThemeRegistry from '@/tools/theme/ThemeRegistry';
import {dir} from 'i18next';
import {cookies} from 'next/headers'
import {fallbackLng} from '@/app/i18n/settings'
import FooterCard from "@/components/FooterCard";
import StoreRegistry from "@/tools/redux/StoreRegistry";
import SimpleAppBar from "@/features/SimpleAppBar";
import {IRANSansX, IRANSansXFaNum, roboto} from '@/app/fonts';
import QueryRegistry from "@/tools/query/QueryRegistry";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

const DRAWER_WIDTH = 240;


export default function AuthLayout({children}: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const lng = cookieStore.has('rabsana-lang') ? cookieStore.get('rabsana-lang')?.value : fallbackLng;
  const defaultTheme = cookieStore.has('theme') ? cookieStore.get('theme').value : undefined;
  return (
    <html
      lang={lng}
      dir={dir(lng)}
      data-theme={defaultTheme ? defaultTheme : 'dark'}
      style={{colorScheme: defaultTheme ? defaultTheme : 'dark'}}
      className={`${IRANSansX.variable} ${IRANSansXFaNum.variable} ${roboto.variable}`}
    >
    <body style={{height: '100vh'}}>
    <QueryRegistry>
      <ThemeRegistry defaultTheme={defaultTheme}>
        <StoreRegistry>
          <SimpleAppBar/>
          <Box
            component="main"
            sx={{
              display: 'flex',
              minHeight: '100%',
              flexGrow: 1,
              bgcolor: 'background.default',
              pb: ['48px'],
              pt: ['64px'],
              p: 1,
            }}
          >
            {children}
          </Box>
          <FooterCard/>
        </StoreRegistry>
      </ThemeRegistry>
      <ReactQueryDevtools initialIsOpen />
    </QueryRegistry>
    </body>
    </html>
  );
}
