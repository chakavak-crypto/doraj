'use client';

import {Avatar, Box, Button, Divider, IconButton, Stack, Typography} from "@mui/material";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import {useTranslation} from "@/app/i18n/client";
import {default as NextLink} from 'next/link';
import CkkChipType1 from "@/components/CkkChipType1";
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {useRef} from "react";

const options: Highcharts.Options = {
  credits: {
    href: "#",
    style: {
      cursor: "none"
    },
    enabled: false
  },
  chart: {
    backgroundColor: 'rgba(0,0,0,0)',
    plotBorderWidth: 0,
    plotShadow: false,
    animation: false,
    height: 140,
    reflow: true,
  },
  title: {
    text: '450,000,000 IRT<br>$ 8,200',
    align: 'center',
    verticalAlign: 'middle',
    y: 40
  },
  legend: {
    enabled: false
  },
  tooltip: false,
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false,
      },
      states: {
        hover: {
          enabled: false
        }
      },
      enableMouseTracking: false,
      startAngle: -95,
      endAngle: 95,
      center: ['50%', '122%'],
      size: '240px',
    }
  },
  series: [{
    type: 'pie',
    name: 'assets',
    innerSize: '90%',
    borderWidth: 0,
    borderRadius: 5,
    animation: false,
    allowPointSelect: false,
    data: [
      {
        name: "USD",
        y: 12,
        color: '#f01'
      },
      {
        name: "IRT",
        y: 8,
        color: '#0022ff'
      },
      {
        name: "OTHERS",
        y: 80,
        color: '#47b53f'
      }
    ]
  }]
};

export default function CkkWalletSummeryCardType1() {
  const [t] = useTranslation();
  const chartComponentRef = useRef<HighchartsReact.RefObject>();

  return (
    <Stack spacing={1}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography fontWeight={'bold'}>{t('wallet')}</Typography>
        <IconButton component={NextLink} href={'/wallet'}  size={'small'}>
          <ExpandCircleDownOutlinedIcon color={'secondary'} sx={{
            transform: 'rotate(90deg)'
          }} />
        </IconButton>
      </Stack>
      <Box>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartComponentRef}
        />
      </Box>
      <Stack
        direction={'row'}
        spacing={1}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <CkkChipType1
          label={'37%'}
          color={'warning'}
          avatar={<Avatar src={'/btc.jpg'}/>}
        />
        <CkkChipType1
          label={'60%'}
          color={'success'}
          avatar={<Avatar>IRT</Avatar>}
        />
        <CkkChipType1
          label={'37%'}
          avatar={<Box component={'span'} fontSize={'larger'}>{t('others')}</Box>}
        />
      </Stack>
      <Stack direction={'row'} spacing={1} justifyContent={'space-between'} alignItems={'center'}>
        <Button component={NextLink} href={'/deposit'} fullWidth size={'small'} variant="contained">{t('deposit')}</Button>
        <Button component={NextLink} href={'/withdraw'} size={'small'} color={'secondary'} variant="outlined" fullWidth>{t('withdraw')}</Button>
      </Stack>
      <Divider />
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography fontWeight={'bold'}>تعداد کل سفارشات:</Typography>
        <Typography>10</Typography>
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography fontWeight={'bold'}>مبلغ کل سفارشات:</Typography>
        <Typography>10,000,000 ریال</Typography>
      </Stack>
    </Stack>
  );
}