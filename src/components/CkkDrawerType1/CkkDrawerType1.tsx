'use client';
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import {CkkDrawerType1Props} from "@/components/CkkDrawerType1/types";


export default function CkkDrawerType1(props: CkkDrawerType1Props) {
  const {
    open,
    width,
    children,
    variant,
    onClose
  } = props;

  return (
    variant === "temporary" ? (
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          zIndex: '2500',
          display: {xs: 'block', md: 'none'},
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: width,
            maxWidth: '85%',
            backgroundImage: 'none',
            borderRightColor: (theme) => theme.palette.divider,
            borderRightWidth: '1px',
            borderRightStyle: 'solid'
          },
          '& .MuiBackdrop-root': {
            backdropFilter: 'blur(10px)'
          }
        }}
      >
        {children}
      </Drawer>
    ) : (
      <Drawer
        sx={{
          width: width,
          display: {xs: 'none', md: 'block'},
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: width,
            boxSizing: 'border-box',
            top: ['48px', '56px', '64px'],
            bottom: ['48px', '56px', '64px'],
            height: 'auto',
            border: 0
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {children}
      </Drawer>
    )
  );
}