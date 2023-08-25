import {useTheme} from "next-themes";
import {CssBaseline, GlobalStyles, responsiveFontSizes, ThemeProvider} from "@mui/material";
import {AllowedTheme, darkTheme, globalStyles, lightTheme} from "./theme";
import {FC, useEffect, useState} from "react";
import { deepmerge } from '@mui/utils';

const MUIThemeProvider: FC<{ children: React.ReactNode, defaultTheme?:  AllowedTheme}> = ({
                                                               children,
                                                                defaultTheme
                                                             }) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(() => {
    return defaultTheme === 'light' ? lightTheme : darkTheme
  });

  useEffect(() => {
    let selectedTheme = resolvedTheme === "light" ? lightTheme : darkTheme;
    setCurrentTheme(responsiveFontSizes(selectedTheme));
  }, [resolvedTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;