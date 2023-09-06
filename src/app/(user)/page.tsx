import * as React from 'react';
import Box from '@mui/material/Box';
import {useTranslation} from "@/app/i18n";
import {Button, ButtonGroup, Divider, Grid, InputAdornment, Stack, TextField, Typography} from "@mui/material";
import CkkContent from "@/components/CkkContent/CkkContent";
import CkkAlertType1 from "@/components/CkkAlertType1";
import CkkCardType2 from "@/components/CkkCardType2";
import SearchIcon from '@mui/icons-material/Search';
import CkkCurrenciesTableType1 from "@/components/CkkCurrenciesTableType1";
import CkkWalletSummeryCardType1 from "@/components/CkkWalletSummeryCardType1";

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
                  <CkkCardType2/>
                </Grid>
                <Grid item xs={3}>
                  <CkkCardType2/>
                </Grid>
                <Grid item xs={3}>
                  <CkkCardType2/>
                </Grid>
                <Grid item xs={3}>
                  <CkkCardType2/>
                </Grid>
              </Grid>
              <Divider sx={{mx: -1.5, my: 1.5}}/>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box>
                  <Button variant={'outlined'}>foo</Button>
                  <Button>bar</Button>
                </Box>
                <Box>
                  <TextField
                    size={'small'}
                    sx={{minWidth: '250px'}}
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
                  <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                  </ButtonGroup>
                </Box>
              </Stack>
              <Box sx={{mx: -1.5, mt: 1}}>
                <CkkCurrenciesTableType1/>
              </Box>
            </CkkContent>
          </Box>
        </CkkContent>
      </Grid>
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <CkkContent>
            <CkkWalletSummeryCardType1/>
          </CkkContent>
          <CkkContent>transactions</CkkContent>
          <CkkContent>news</CkkContent>
        </Stack>
      </Grid>
    </Grid>
  );
}
