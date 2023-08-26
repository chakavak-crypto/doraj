import {createTheme, css, PaletteOptions} from '@mui/material/styles';

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;
export const DEFAULT_THEME: AllowedTheme = "dark";



export const lightTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: 'var(--iransansfanum)',
    fontSize: 12,
    button: {
      fontStyle: 'normal'
    }
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
  typography: {
    fontFamily: 'var(--iransansfanum)',
    fontSize: 12,
    button: {
      fontStyle: 'normal'
    }
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
