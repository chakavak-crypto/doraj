import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import {useTranslation} from "@/app/i18n";
import {Button, Divider, Grid, Stack, Typography} from "@mui/material";
import CkkContent from "@/components/CkkContent/CkkContent";
import CkkAlertType1 from "@/components/CkkAlertType1";
import CkkCardType2 from "@/components/CkkCardType2";

export default async function HomePage() {
  const {t} = await useTranslation('messages');
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={9}>
        <CkkContent>
          <CkkAlertType1 severity={'error'} variant="filled">
            این یک متن تستی است
          </CkkAlertType1>
          <Box mt={1}>
            <CkkContent>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                  <Typography variant={'h6'}>قیمت ارزهای دیجیتال</Typography>
                  <Typography color={'text.secondary'}>لیست آخرین قیمت های رمزارزها</Typography>
                </Box>
                <Stack direction={'row'} spacing={1}>
                  <Button variant={'contained'} color={'secondary'}>تومان</Button>
                  <Button color={'secondary'}>USDT</Button>
                </Stack>
              </Stack>
              <Grid container spacing={1} sx={{overflowX: 'scroll', mt: 1}}>
                <Grid item xs={3}>
                  <CkkCardType2 />
                </Grid>
                <Grid item xs={3}>
                  <CkkCardType2 />
                </Grid>
                <Grid item xs={3}>
                  <CkkCardType2 />
                </Grid>
                <Grid item xs={3}>
                  <CkkCardType2 />
                </Grid>
              </Grid>
              <Divider sx={{mx: -1.5, my: 1.5}}/>
            </CkkContent>
          </Box>
        </CkkContent>
      </Grid>
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <CkkContent>balance</CkkContent>
          <CkkContent>transactions</CkkContent>
          <CkkContent>news</CkkContent>
        </Stack>
      </Grid>
    </Grid>
  );
}
