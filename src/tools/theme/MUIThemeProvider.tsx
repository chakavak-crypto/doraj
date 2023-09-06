import {useTheme} from "next-themes";
import {CssBaseline, Direction, GlobalStyles, responsiveFontSizes, ThemeProvider} from "@mui/material";
import {AllowedTheme, darkTheme, globalStyles, lightTheme} from "./theme";
import {FC, useEffect, useState} from "react";

const MUIThemeProvider: FC<{ children: React.ReactNode, defaultTheme?: AllowedTheme, dir?: Direction }> = ({
                                                                                                             children,
                                                                                                             defaultTheme,
                                                                                                             dir
                                                                                                           }) => {
  const {resolvedTheme} = useTheme();
  const [currentTheme, setCurrentTheme] = useState(() => {
    return defaultTheme === 'light' ? lightTheme : darkTheme
  });

  useEffect(() => {
    let selectedDir = dir ? dir : document.dir;
    selectedDir = selectedDir ? selectedDir : 'rtl';
    let selectedTheme = resolvedTheme === "light" ? lightTheme : darkTheme;
    selectedTheme.direction = selectedDir as Direction;
    setCurrentTheme(responsiveFontSizes(selectedTheme));
  }, [resolvedTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline/>
      <GlobalStyles styles={globalStyles}/>
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;