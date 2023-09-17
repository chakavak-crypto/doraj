import React, {useEffect, useState} from 'react';
import {Box, IconButton, InputAdornment, OutlinedInputProps, TextField} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import {LtrTheme} from "@/tools/theme/ThemeRegistry";
import StrengthMeter from "@/components/StrengthMeter";

export interface PasswordInputProps extends OutlinedInputProps {
  withStrengthMeter?: boolean
}

export default function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showReset, setShowReset] = useState(false);
  const {value, onChange, withStrengthMeter, ...restProps} = props

  useEffect(() => {
    if (!!value) {
      setShowReset(true)
    } else {
      setShowReset(false)
    }
  }, [value])

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClear = () => {
    const evt = {target: {name: props?.name, value: ''}}
    if(onChange){
      onChange(evt as any);
    }
  }

  return (
    <>
      <LtrTheme>
        <TextField
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          InputProps={{
            endAdornment: (
              <>
                {
                  showReset && (
                    <InputAdornment position="end">
                      <IconButton
                        tabIndex={-1}
                        aria-label="toggle password visibility"
                        onClick={handleClear}
                        onMouseDown={handleMouseEvent}
                        onMouseUp={handleMouseEvent}
                        edge="end"
                        size={'small'}
                      >
                        <CloseIcon sx={{color: 'text.secondary'}}/>
                      </IconButton>
                    </InputAdornment>
                  )
                }
                <InputAdornment position="end">
                  <IconButton
                    tabIndex={-1}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseEvent}
                    onMouseUp={handleMouseEvent}
                    edge="end"
                    size={'small'}
                  >
                    {showPassword ? <VisibilityOff sx={{color: 'text.secondary'}}/> :
                      <Visibility sx={{color: 'text.secondary'}}/>}
                  </IconButton>
                </InputAdornment>
              </>
            )
          }}

          {...restProps}
        />
      </LtrTheme>
      {!!withStrengthMeter && (
        <Box sx={{px: 1, py: 0.25}}>
          <StrengthMeter value={value} />
        </Box>
      )}
    </>
  );
}