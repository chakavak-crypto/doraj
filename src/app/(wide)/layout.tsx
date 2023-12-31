import * as React from 'react';
import Box from '@mui/material/Box';
import ThemeRegistry from '@/tools/theme/ThemeRegistry';
import {dir} from 'i18next';
import {cookies} from 'next/headers'
import {fallbackLng} from '@/app/i18n/settings'
import AppBar from "@/features/AppBar";
import FooterCard from "@/components/FooterCard";
import StoreRegistry from "@/tools/redux/StoreRegistry";
import LogoutModal from "@/features/LogoutModal";
import {IRANSansX, IRANSansXFaNum, roboto} from "@/app/fonts";
import QueryRegistry from "@/tools/query/QueryRegistry";

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

const DRAWER_WIDTH = 240;

//TODO compute main box height dynamically
export default function RootLayout({children}: { children: React.ReactNode }) {
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
          <AppBar/>
          <Box
            component="main"
            sx={{
              bgcolor: 'background.default',
              pt: ['74px'],
              pb: ['80px', '48px'],
              px: [1, 2],
              height: '100%'
            }}
          >
            {children}
          </Box>
          <FooterCard/>
          <LogoutModal/>
        </StoreRegistry>
      </ThemeRegistry>
    </QueryRegistry>
    </body>
    </html>
  );
}
