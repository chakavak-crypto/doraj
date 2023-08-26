import {OutlinedInputProps, TextField} from "@mui/material";
import React from "react";
import {LtrTheme} from "@/tools/theme/ThemeRegistry";

export default function CkkEmailField(props: OutlinedInputProps) {
  return (
    <LtrTheme>
      <TextField
        {...props}
      />
    </LtrTheme>
  );
}