'use client'

import {Box, Divider} from "@mui/material";
import * as React from "react";
import CkkFiatDepositsType1 from "@/components/CkkFiatDepositsType1";

export default function FiatDeposits(){
  return (
    <Box>
      <Box sx={{mt: 1.5}}>filters</Box>
      <Divider sx={{mx: -1.5, my: 1.5}} />
      <Box sx={{mx: -1.5}}>
        <CkkFiatDepositsType1 />
      </Box>
    </Box>
  );
}