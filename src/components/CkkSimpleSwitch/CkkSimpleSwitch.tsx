import * as React from 'react';
import CkkBaseSwitch, {CkkBaseSwitchProps} from "../CkkBaseSwitch/CkkBaseSwitch";
import {useTheme} from "@mui/material";

export interface CkkSimpleSwitchProps extends Omit<CkkBaseSwitchProps, 'leftColor' | 'rightColor'> {
}

export default function CkkSimpleSwitch(props: CkkSimpleSwitchProps) {
  const theme = useTheme();
  return (
    <CkkBaseSwitch {...props} leftColor={'red'} rightColor={theme.palette.primary.main}/>
  );
}