import * as React from 'react';
import {styled} from '@mui/material/styles';
import Switch, {SwitchProps} from '@mui/material/Switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ReactDOMServer from 'react-dom/server';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {SvgIcon} from "@mui/material";

export function getSvgBackgroundImage(icon: typeof SvgIcon, color: string, width: number, height: number) {
  return `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="${height}" width="${width}" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
    color,
  )}" d="${getIconPath(icon)}"/></svg>')`;
}

export function getIconPath(Icon: typeof SvgIcon): string {
  const iconString = ReactDOMServer.renderToString(<Icon/>);
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(iconString, 'image/svg+xml');
  return svgDoc.querySelector('path')?.getAttribute('d') as string;
}

const StyledSwitch = styled((props: CkkBaseSwitchProps) => {
  let customProps = Object.assign({}, props);
  // Because Switch component didn't have the following properties, we should remove them first
  delete customProps['leftColor'];
  delete customProps['rightIcon'];
  delete customProps['rightColor'];
  delete customProps['leftIcon'];
  return <Switch disableRipple {...customProps as SwitchProps} />
})(({theme, size, leftColor, rightColor, leftIcon, rightIcon}) => {
  let base;
  switch (size) {
    case 'small':
      base = 52;
      break;
    case 'medium':
      base = 72;
      break;
    case undefined:
      base = 72;
      break;
    case 'large':
      base = 98;
      break;
    default:
      base = 72;
      break;
  }
  return {
    padding: 0,
    margin: '0px!important',
    width: base,
    height: base / 2,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: base / 16,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: `translateX(${base / 2}px)`,
        '& .MuiSwitch-thumb:before': {
          backgroundImage: rightIcon ? `${getSvgBackgroundImage(DarkModeIcon, '#fff', base / 3, base / 3)}` : 'unset'
        },
        color: rightColor ? rightColor : 'inherit',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[600] : theme.palette.grey[200],
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
        '& .MuiSwitch-input': {
          left: '-170%'
        }
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
      '& .MuiSwitch-input': {
        left: '-30%'
      }
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: base / 3 + base / 16,
      height: base / 3 + base / 16,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: leftIcon ? `${getSvgBackgroundImage(WbSunnyIcon, leftColor ? leftColor : 'inherit', base / 3, base / 3)}` : 'unset'
      }
    },
    '& .MuiSwitch-track': {
      borderRadius: base / 4,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: base / 4,
        height: base / 4,
      },
      '&:after': {
        backgroundImage: rightIcon ?
          `${getSvgBackgroundImage(rightIcon, theme.palette.mode === 'light' ? theme.palette.grey[600] : theme.palette.grey[100], base / 4, base / 4)}` : 'unset',
        right: base / 8,
      },
      '&:before': {
        backgroundImage: leftIcon ?
          `${getSvgBackgroundImage(leftIcon, theme.palette.mode === 'light' ? theme.palette.grey[600] : theme.palette.grey[100], base / 4, base / 4)}` : 'unset',
        left: base / 8,
      }
    },
  }
});

export interface CkkBaseSwitchProps extends Omit<SwitchProps, 'size'> {
  size?: 'small' | 'medium' | 'large';
  leftIcon?: typeof SvgIcon;
  rightIcon?: typeof SvgIcon;
  leftColor?: string;
  rightColor: string;
  defaultChecked?: boolean
}

export default function CkkBaseSwitch(props: CkkBaseSwitchProps) {
  return (
    <StyledSwitch {...props} />
  );
}