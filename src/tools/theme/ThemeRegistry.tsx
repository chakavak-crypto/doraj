'use client';

import * as React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import {AllowedTheme, LtrTheme as LtrThemeBase} from './theme';
import {ThemeProvider as PreferredThemeProvider} from "next-themes";
import MUIThemeProvider from "@/tools/theme/MUIThemeProvider";

export function LtrTheme({children}: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={LtrThemeBase}>
      <div dir={'ltr'}>{children}</div>
    </ThemeProvider>
  );
}

export default function ThemeRegistry({children, defaultTheme}: { children: React.ReactNode, defaultTheme?:  AllowedTheme }) {
  return (
    <PreferredThemeProvider disableTransitionOnChange>
      <NextAppDirEmotionCacheProvider options={{key: 'rabsana'}}>
        <MUIThemeProvider defaultTheme={defaultTheme}>
          {children}
        </MUIThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </PreferredThemeProvider>
  );
}
