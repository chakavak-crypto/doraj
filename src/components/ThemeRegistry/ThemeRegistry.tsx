'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme, {LtrTheme as LtrThemeBase} from './theme';
export function LtrTheme({ children }: { children: React.ReactNode }){
  return (
    <ThemeProvider theme={LtrThemeBase}>
      <div dir={'ltr'}>{children}</div>
    </ThemeProvider>
  );
}
export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
