'use client';

import {Box, Button, Card, CardContent, Link, Stack, Typography} from "@mui/material";
import {default as NextLink} from 'next/link';
import {useTranslation} from "@/app/i18n/client";
import CkkRoundedLinearProgress from "@/components/CkkRoundedLinearProgress";

export default function CkkCurrentKycLevelCard(){
  const [t] = useTranslation();
  return (
    <Card
      variant={'outlined'}
      sx={{
        minWidth: 300,
        maxWidth: 400,
        width: '100%',
        borderWidth: '2px'
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems={'center'}>
          <Stack direction={'row'} spacing={0.5} alignItems={'center'} minWidth={'100%'}>
            <Box component={'img'} src={'/kyc.svg'} width={24} />
            <Typography fontWeight={'bolder'} fontSize={'larger'}>{t('kyc')}</Typography>
          </Stack>
          <Stack direction={'row'} spacing={1} alignItems={'center'} minWidth={'100%'}>
            <Box>5%</Box>
            <Box>{t('total_progress')}</Box>
            <Box flexGrow={1}>
              <CkkRoundedLinearProgress
                variant="determinate"
                value={10}
              />
            </Box>
          </Stack>
          <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
            <Typography fontWeight={'bolder'}>{t('your_current_level')}:</Typography>
            <Typography fontWeight={'bolder'}>سطح ۱</Typography>
          </Stack>
          <Box>
            <Typography fontWeight={'bold'}>{t('features')}:</Typography>
          </Box>
          <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
            <Typography>{t('buy_commission')}:</Typography>
            <Typography>0.5 درصد</Typography>
          </Stack>
          <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
            <Typography>{t('sell_commission')}:</Typography>
            <Typography>0.25 درصد</Typography>
          </Stack>
          <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
            <Typography>{t('max_deposit')}:</Typography>
            <Typography>1,000,000 تومان</Typography>
          </Stack>
          <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
            <Typography>{t('max_withdraw')}:</Typography>
            <Typography>1,000,000 تومان</Typography>
          </Stack>
          <Box minWidth={'90%'}>
            <Button
              size={'large'}
              variant={'contained'}
              fullWidth
            >{t('upgrade_to_level1')}</Button>
          </Box>
          <Box textAlign={'center'}>
            <Link href={'/kyc/levels'} component={NextLink} underline={'none'}>{t('show_all_levels')}</Link>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}