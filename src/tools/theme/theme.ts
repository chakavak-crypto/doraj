import {Roboto} from 'next/font/google';
import {createTheme, css, PaletteOptions} from '@mui/material/styles';

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;
export const DEFAULT_THEME: AllowedTheme = "dark";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const lightTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: "light",
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
});

export const darkTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: "dark",
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
});

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

const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    info: {
      main: 'rgba(60, 68, 255, 1)'
    }
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ownerState}) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export const LtrTheme = createTheme(theme, {
  direction: 'ltr',
});


export default theme;
