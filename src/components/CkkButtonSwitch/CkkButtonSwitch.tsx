'use client';

import {Box, Button, ButtonProps, Stack, StackProps} from "@mui/material";

interface CkkButtonSwitchProps {
  value: 0 | 1,
  firstTitle: string,
  secondTitle: string,
  onChange?: (newVal) => unknown,
  firstButtonProps?: Omit<ButtonProps, 'size' | 'fullWidth' | 'variant' | 'onClick'>,
  secondButtonProps?: Omit<ButtonProps, 'size' | 'fullWidth' | 'variant' | 'onClick'>,
  containerProps?: Omit<StackProps, 'direction' | 'spacing'>
}

export default function CkkButtonSwitch(props: CkkButtonSwitchProps) {
  const {
    value,
    firstTitle,
    secondTitle,
    onChange,
    firstButtonProps,
    secondButtonProps,
    containerProps
  } = props;

  const handleChange = (newVal: 0 | 1) => {
    if (onChange) {
      onChange(newVal);
    }
  }
  return (
    <Stack
      direction={'row'}
      spacing={2}
      {...containerProps}
    >
      <Box sx={{width: '50%'}}>
        <Button
          size={'small'}
          fullWidth
          variant={value === 0 ? 'contained' : 'text'}
          onClick={() => handleChange(0)}
          {...firstButtonProps}
        >{firstTitle}</Button>
      </Box>
      <Box sx={{width: '50%'}}>
        <Button
          fullWidth
          size={'small'}
          variant={value === 1 ? 'contained' : 'text'}
          onClick={() => handleChange(1)}
          {...secondButtonProps}
        >{secondTitle}</Button>
      </Box>
    </Stack>
  );
}