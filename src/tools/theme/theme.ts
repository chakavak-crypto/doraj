import {createTheme, css, PaletteOptions, ThemeOptions} from '@mui/material/styles';
import {deepmerge} from "@mui/utils";

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;
export const DEFAULT_THEME: AllowedTheme = "dark";



const themeOptions: ThemeOptions = {
  direction: 'rtl',
  typography: {
    fontFamily: 'var(--iransansfanum)',
    fontSize: 12,
    button: {
      fontStyle: 'normal'
    }
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#3C44FF"
        }
      }
    }
  }
};

export const lightTheme = createTheme(deepmerge(themeOptions, {
  palette: {
    mode: "light",
  },
}));

export const darkTheme = createTheme(deepmerge(themeOptions, {
  palette: {
    mode: "dark",
  },
}));

export const globalStyles = css`
  :root {
    body {
      
    }
  }

  [data-theme="dark"] {
    body {
      
    }
  }
`;
