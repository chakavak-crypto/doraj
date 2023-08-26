import {OutlinedInputProps, TextField} from "@mui/material";
import React from "react";
import {LtrTheme} from "@/tools/theme/ThemeRegistry";
import {PatternFormat} from 'react-number-format';

export default function CkkMobileField(props: OutlinedInputProps) {
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