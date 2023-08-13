'use client';

import CkkDrawerType1 from "@/components/CkkDrawerType1";
import * as React from "react";
import Menus from "@/features/MainSideBar/Menus";
import {MainSideBarProps} from "@/features/MainSideBar/types";
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/tools/redux/hooks";
import {closeMainSideBar, selectOpen} from "@/features/MainSideBar/MainSideBarSlice";

export default function MainSideBar(props: MainSideBarProps){
  const {
    width,
  } = props;
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('md'));
  const open = useAppSelector(selectOpen)
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeMainSideBar())
  };
  return (
    <CkkDrawerType1
      width={width}
      open={open}
      variant={matchesSM ? "temporary" : "permanent"}
      onClose={handleClose}
    >
      <Menus />
    </CkkDrawerType1>
  );
}