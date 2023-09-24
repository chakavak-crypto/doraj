'use client';

import {Avatar, Chip} from "@mui/material";
import {useTheme, darken} from "@mui/material/styles";

export default function CkkChipType3(props: {label: string, index: number}){
  const theme = useTheme();
  return (
    <Chip
      sx={{
        borderRadius: '10px',
        borderLeftWidth: '10px',
        borderLeftStyle: 'solid',
        width: 120,
        pr: 1.5,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        borderLeftColor: 'primary.main',
        bgcolor: `${darken(theme.palette.primary.main, 0.75)}`,
        color: 'white',
        '&>.MuiChip-label': {
          paddingRight: 0,
          marginRight: '12px',
          paddingLeft: '6px',
        }
      }}
      label={props.label}
      avatar={<Avatar sx={{width: '16px!important', height: '16px!important', fontSize: '12px!important'}}>{props.index}</Avatar>}
    />
  );
}