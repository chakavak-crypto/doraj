'use client';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import {useTranslation} from "@/app/i18n/client";
import {default as NextLink} from 'next/link';
import CkkChipType1 from "@/components/CkkChipType1";

export default function CkkWalletSummeryCardType1() {
  const [t] = useTranslation();
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios
        .get('https://api.github.com/repos/tannerlinsley/react-query')
        .then((res) => res.data),
  })

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
      <Stack direction={'row'} spacing={1} justifyContent={'space-between'} alignItems={'center'}>
        <CkkChipType1
          label={'37%'}
          size={'small'}
          color={'warning'}
          avatar={<Avatar src={'/btc.jpg'}/>}
        />
        <CkkChipType1
          label={'60%'}
          size={'small'}
          color={'success'}
          avatar={<Avatar>IRT</Avatar>}
        />
        <CkkChipType1
          label={'37%'}
          size={'small'}
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