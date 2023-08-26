'use client';

import * as React from 'react';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import {AllowedTheme} from './theme';
import {ThemeProvider as PreferredThemeProvider} from "next-themes";
import MUIThemeProvider from "@/tools/theme/MUIThemeProvider";

export function LtrTheme({children}: { children: React.ReactNode }) {
  return (
    <MUIThemeProvider dir={'ltr'}>
      <div dir={'ltr'}>{children}</div>
    </MUIThemeProvider>
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
