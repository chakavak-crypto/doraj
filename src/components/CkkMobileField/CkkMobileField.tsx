import {IconButton, InputAdornment, OutlinedInput, OutlinedInputProps, TextField} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {LtrTheme} from "@/components/ThemeRegistry/ThemeRegistry";
import { PatternFormat } from 'react-number-format';

export default function CkkMobileField(props: OutlinedInputProps){
  return (
    <LtrTheme>
      <PatternFormat
        format="+98 ### ### ####"
        allowEmptyFormatting
        customInput={TextField}
        type={'tel'}
        {...props}
      />
    </LtrTheme>
  );
}