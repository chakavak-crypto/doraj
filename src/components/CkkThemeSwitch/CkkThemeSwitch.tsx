import * as React from 'react';
import {blue, orange} from "@mui/material/colors";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CkkBaseSwitch, {CkkBaseSwitchProps} from "../CkkBaseSwitch/CkkBaseSwitch";

export interface CkkThemeSwitchProps extends Omit<CkkBaseSwitchProps, "leftIcon" | "leftColor" | "rightColor" | "rightIcon"> {
}

export default function CkkThemeSwitch(props: CkkThemeSwitchProps) {
  return (
    <CkkBaseSwitch
      {...props}
      leftIcon={WbSunnyIcon}
      rightIcon={DarkModeIcon}
      leftColor={orange["400"]}
      rightColor={blue["500"]}
    />
  );
}