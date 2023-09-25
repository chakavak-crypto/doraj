'use client';

import CkkDrawerType1 from "@/components/CkkDrawerType1";
import * as React from "react";
import Menus from "@/features/MainSideBar/Menus";
import {MainSideBarProps} from "@/features/MainSideBar/types";
import {useTheme} from "@mui/material/styles";
import {Box, IconButton, Stack, useMediaQuery} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/tools/redux/hooks";
import {closeMainSideBar, selectOpen} from "@/features/MainSideBar/MainSideBarSlice";
import CkkLogoType1 from "@/components/CkkLogoType1/CkkLogoType1";
import CloseIcon from "@mui/icons-material/Close";
import Greeting from "@/components/Greeting";

export default function MainSideBar(props: MainSideBarProps) {
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
      <Stack direction={'row'} justifyContent={'space-between'} sx={{m: 1, display: {xs: 'flex', md: 'none'}}}>
        <CkkLogoType1/>
        <Box>
          <IconButton onClick={handleClose}><CloseIcon/></IconButton>
        </Box>
      </Stack>
      <Box sx={{mx: 3, display: {xs: 'flex', md: 'none'}}}>
        <Greeting orientation={'vertical'} size={'small'} name={'حامد'}/>
      </Box>
      <Menus/>
    </CkkDrawerType1>
  );
}