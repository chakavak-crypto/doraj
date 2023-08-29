import React, {useState} from "react";
import {Avatar, Fab, IconButton, OutlinedInputProps, SliderProps, TextField} from "@mui/material";
import {LtrTheme} from "@/tools/theme/ThemeRegistry";
import {NumericFormat} from "react-number-format";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {styled} from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';
import InputAdornment from '@mui/material/InputAdornment';
import IrtImg from '@/assets/irt.jpg';
import Image from "next/image";

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 25,
    label: '25%',
  },
  {
    value: 50,
    label: '50%',
  },
  {
    value: 75,
    label: '75%',
  },
  {
    value: 100,
    label: '100%',
  },
];

function valuetext(value: number) {
  return `${value}%`;
}

const StyledSlider = styled<SliderProps>(Slider)(({ theme }) => ({
  color: theme.palette.success.dark,
  height: 3,
  '& .MuiSlider-thumb': {
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#bfbfbf',
    height: 6,
    width: 6,
    borderRadius: '50%',
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
  '& .MuiSlider-markLabel': {
    lineHeight: 0.43
  }
}));

export interface CkkCurrencyFieldType1 extends OutlinedInputProps{
  hasSlider?: boolean | undefined;
  label?: string | undefined;
  InputProps?: OutlinedInputProps | undefined;
  icon?: string | undefined;
  symbol?: string | undefined;
}
export default function CkkCurrencyFieldType1(props: CkkCurrencyFieldType1) {
  const {
    hasSlider,
    label,
    InputProps,
    icon,
    symbol
  } = props;
  const [value, setValue] = useState('');

  const handleClear = () => {
    setValue('');
  }

  return (
    <>
      <LtrTheme>
        <NumericFormat
          thousandSeparator=","
          customInput={TextField}
          value={value}
          allowNegative={false}
          sx={{
            '& .MuiInputBase-root': {
              px: 0.6,
            },
            '& .MuiInputBase-root .MuiInputBase-input': {
              fontWeight: 'bold',
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <Box display={'flex'} alignItems={'center'}>
                  {!!icon && (
                    <Avatar size={'small'} sx={{ width: 25, height: 25 }}>
                      <Image src={icon} alt={'icon'} width={25} height={25} />
                    </Avatar>
                  )}
                  {(!!icon && !!symbol) && (
                    <Box component={'span'} px={'3px'} sx={{fontSize: '22px'}}>|</Box>
                  )}
                  {!!symbol && (
                    <Box component={'span'} fontSize={'smaller'}>{symbol}</Box>
                  )}
                </Box>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                <Box display={'flex'} alignItems={'center'}>
                  {!!label && (
                    <Box component={'span'} fontSize={'smaller'} ml={0.5}>{ label }</Box>
                  )}
                  <IconButton size={'small'}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </InputAdornment>
            ),
          }}
          {...InputProps}
        />
      </LtrTheme>
      {!!hasSlider && (
        <Box sx={{px: 1.5}}>
          <StyledSlider
            defaultValue={10}
            size={'small'}
            getAriaValueText={valuetext}
            step={1}
            marks={marks}
            sx={{
              pt: 0.5,
            }}
          />
        </Box>
      )}
    </>
  );
}