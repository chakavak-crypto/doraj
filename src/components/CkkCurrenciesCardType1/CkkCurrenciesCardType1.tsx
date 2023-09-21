'use client';

import {Button, ButtonGroup, Divider, Grid, InputAdornment, Stack, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import CkkCardType2 from "@/components/CkkCardType2";
import SearchIcon from "@mui/icons-material/Search";
import CkkCurrenciesTableType1 from "@/components/CkkCurrenciesTableType1";
import CkkContent from "@/components/CkkContent/CkkContent";
import * as React from "react";
import {useTranslation} from "@/app/i18n/client";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CkkResponsiveButtonSwitchType1 from "@/components/CkkResponsiveButtonSwitchType1";
import {useState} from "react";
import CkkResponsiveButtonSwitchType2 from "@/components/CkkResponsiveButtonSwitchType2";


export default function CkkCurrenciesCardType1(){
  const [t] = useTranslation();
  const [unit, setUnit] = useState('toman');
  const [type, setType] = useState('crypto');
  const [filter, setFilter] = useState('all');
  return (
    <CkkContent>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Box>
          <Typography variant={'h6'}>{t('crypocurrencies_price')}</Typography>
          <Typography color={'text.secondary'}>{t('latest_price_of_cryptos')}</Typography>
        </Box>
        <CkkResponsiveButtonSwitchType1
          label1={t('toman')}
          label2={'USDT'}
          value1={'toman'}
          value2={'usdt'}
          value={unit}
          onChange={(newVal) => setUnit(newVal)}
        />
      </Stack>
      <Grid container spacing={1} sx={{
        overflowX: 'scroll',
        mt: 1,
        flexWrap: 'nowrap',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <CkkCardType2/>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <CkkCardType2/>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <CkkCardType2/>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <CkkCardType2/>
        </Grid>
      </Grid>
      <Divider sx={{mx: -1.5, my: 1.5}}/>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        spacing={1}
      >
        <Box>
          <CkkResponsiveButtonSwitchType1
            label1={t('voucher')}
            label2={t('crypto')}
            value1={'voucher'}
            value2={'crypto'}
            value={type}
            onChange={(newVal) => setType(newVal)}
          />
        </Box>
        <Box>
          <TextField
            size={'small'}
            sx={{
              width: ['100%']
            }}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon/>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          <CkkResponsiveButtonSwitchType2
            label1={t('show_all')}
            label2={t('favorites')}
            label3={t('newest')}
            value1={'all'}
            value2={'favorites'}
            value3={'newest'}
            value={filter}
            onChange={(newVal) => setFilter(newVal)}
          />
        </Box>
      </Stack>
      <Box sx={{mx: -1.5, mt: 1}}>
        <CkkCurrenciesTableType1/>
      </Box>
    </CkkContent>
  );
}