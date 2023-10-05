'use client'

import {Box, Divider, Stack} from "@mui/material";
import CkkLatestWithdrawalsTableType2 from "@/components/CkkLatestWithdrawalsTableType2";
import * as React from "react";

export default function FiatDeposits(){
  return (
    <Box>
      <Box sx={{mt: 1.5}}>filters</Box>
      <Divider sx={{mx: -1.5, my: 1.5}} />
      <Box sx={{mx: -1.5}}>
        <CkkLatestWithdrawalsTableType2/>
      </Box>
    </Box>
  );
}