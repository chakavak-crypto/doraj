'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import {Avatar, Stack} from "@mui/material";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import CkkFilledIconButton from "../CkkFilledIconButton";
import Typography from "@mui/material/Typography";

export default function CkkCardType2() {
  return (
    <Box sx={{minWidth: 185}}>
      <Card variant={'outlined'}>
        <CardContent>
          <Stack spacing={2}>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Avatar src={"/btc.jpg"} sx={{width: 25, height: 25}}/>
                </Box>
                <Box>
                  <Box>Bitcoin</Box>
                  <Typography fontSize={'smaller'} color="text.secondary">BTC</Typography>
                </Box>
              </Stack>
              <Box color={'success.light'}>+0.23%</Box>
            </Stack>
            <Stack direction={'row'} spacing={5} justifyContent={'space-between'}>
              <Typography fontWeight={'bold'}>2,145,270,000 ریال</Typography>
              <Box>
                <CkkFilledIconButton
                  size={'small'}
                  color={'info'}><SwapHorizIcon/></CkkFilledIconButton>
              </Box>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}