'use client';

import {Box, Card, Stack, Typography} from "@mui/material";
import CkkTradesTableType1 from "@/components/CkkTradesTableType1";

export default function CkkTradesCardType1(){
  return (
    <Card variant={'outlined'}>
      <Typography sx={{px: 1, py: 1}}>تاریخچه معاملات</Typography>
      <CkkTradesTableType1 />
    </Card>

  );
}