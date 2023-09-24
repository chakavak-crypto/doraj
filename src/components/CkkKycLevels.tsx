'use client';

import {Avatar, Box, Button, Card, CardContent, Grid, Stack, Typography} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {useTranslation} from "@/app/i18n/client";

export default function CkkKycLevels(){
  const [t] = useTranslation();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} lg={3}>
        <Card
          variant={'outlined'}
          sx={{
            borderWidth: '2px'
          }}
        >
          <CardContent>
            <Stack spacing={2}>
              <Stack alignItems={'center'} justifyContent={'space-between'} direction={'row'}>
                <Typography variant={'h6'} fontWeight={'bold'}>سطح ۰</Typography>
                <Stack color={'success.main'} direction={'row'} alignItems={'center'} spacing={0.25}>
                  <Typography>تکمیل شد</Typography>
                  <CheckCircleOutlineIcon />
                </Stack>
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
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Card
          variant={'outlined'}
          sx={{
            borderWidth: '2px'
          }}
        >
          <CardContent>
            <Stack spacing={2}>
              <Stack alignItems={'center'} justifyContent={'space-between'} direction={'row'}>
                <Typography variant={'h6'} fontWeight={'bold'}>سطح 1</Typography>
                <Stack color={'success.main'} direction={'row'} alignItems={'center'} spacing={0.25}>
                  <Typography>تکمیل شد</Typography>
                  <CheckCircleOutlineIcon />
                </Stack>
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
              <Box>
                <Typography fontWeight={'bold'}>{t('required_certificates')}:</Typography>
              </Box>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Box>
                  <Avatar sx={{ width: 16, height: 16, fontWeight: 'bold', bgcolor: 'text.primary', fontSize: 'smaller' }}>1</Avatar>
                </Box>
                <Box flexGrow={1}>
                  <Typography>تایید ایمیل / موبایل</Typography>
                </Box>
                <Box color={'success.main'}>
                  <CheckCircleOutlineIcon />
                </Box>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Box>
                  <Avatar sx={{ width: 16, height: 16, fontWeight: 'bold', bgcolor: 'text.primary', fontSize: 'smaller' }}>2</Avatar>
                </Box>
                <Box flexGrow={1}>
                  <Typography>تایید اطلاعات هویتی</Typography>
                </Box>
                <Box color={'success.main'}>
                  <CheckCircleOutlineIcon />
                </Box>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Box>
                  <Avatar sx={{ width: 16, height: 16, fontWeight: 'bold', bgcolor: 'text.primary', fontSize: 'smaller' }}>3</Avatar>
                </Box>
                <Box flexGrow={1}>
                  <Typography>تایید اطلاعات بانکی</Typography>
                </Box>
                <Box color={'success.main'}>
                  <CheckCircleOutlineIcon />
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Card
          variant={'outlined'}
          sx={{
            borderWidth: '2px'
          }}
        >
          <CardContent>
            <Stack spacing={2}>
              <Stack alignItems={'center'} justifyContent={'space-between'} direction={'row'}>
                <Typography variant={'h6'} fontWeight={'bold'}>سطح 2</Typography>
                <Stack color={'error.main'} direction={'row'} alignItems={'center'} spacing={0.25}>
                  <Typography>رد شده</Typography>
                  <CheckCircleOutlineIcon />
                </Stack>
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
              <Box>
                <Typography fontWeight={'bold'}>{t('required_certificates')}:</Typography>
              </Box>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Box>
                  <Avatar sx={{ width: 16, height: 16, fontWeight: 'bold', bgcolor: 'text.primary', fontSize: 'smaller' }}>1</Avatar>
                </Box>
                <Box flexGrow={1}>
                  <Typography>تایید ایمیل / موبایل</Typography>
                </Box>
                <Box color={'success.main'}>
                  <CheckCircleOutlineIcon />
                </Box>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Box>
                  <Avatar sx={{ width: 16, height: 16, fontWeight: 'bold', bgcolor: 'text.primary', fontSize: 'smaller' }}>2</Avatar>
                </Box>
                <Box flexGrow={1}>
                  <Typography>تایید اطلاعات هویتی</Typography>
                </Box>
                <Box color={'success.main'}>
                  <CheckCircleOutlineIcon />
                </Box>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Box>
                  <Avatar sx={{ width: 16, height: 16, fontWeight: 'bold', bgcolor: 'text.primary', fontSize: 'smaller' }}>3</Avatar>
                </Box>
                <Box flexGrow={1}>
                  <Typography>تایید اطلاعات بانکی</Typography>
                </Box>
                <Box color={'success.main'}>
                  <CheckCircleOutlineIcon />
                </Box>
              </Stack>
              <Box>
                <Button fullWidth size={'large'} variant={'contained'}>ارتقا به سطح 2</Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Card
          variant={'outlined'}
          sx={{
            borderWidth: '2px'
          }}
        >
          <CardContent>
            <Stack spacing={2}>
              <Stack alignItems={'center'} justifyContent={'space-between'} direction={'row'}>
                <Typography variant={'h6'} fontWeight={'bold'}>سطح 3</Typography>
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
              <Box>
                <Typography fontWeight={'bold'}>{t('required_certificates')}:</Typography>
              </Box>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Box>
                  <Avatar sx={{ width: 16, height: 16, fontWeight: 'bold', bgcolor: 'text.primary', fontSize: 'smaller' }}>1</Avatar>
                </Box>
                <Box flexGrow={1}>
                  <Typography>تایید ایمیل / موبایل</Typography>
                </Box>
                <Box color={'success.main'}>
                  <CheckCircleOutlineIcon />
                </Box>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Box>
                  <Avatar sx={{ width: 16, height: 16, fontWeight: 'bold', bgcolor: 'text.primary', fontSize: 'smaller' }}>2</Avatar>
                </Box>
                <Box flexGrow={1}>
                  <Typography>تایید اطلاعات هویتی</Typography>
                </Box>
                <Box color={'success.main'}>
                  <CheckCircleOutlineIcon />
                </Box>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Box>
                  <Avatar sx={{ width: 16, height: 16, fontWeight: 'bold', bgcolor: 'text.primary', fontSize: 'smaller' }}>3</Avatar>
                </Box>
                <Box flexGrow={1}>
                  <Typography>تایید اطلاعات بانکی</Typography>
                </Box>
                <Box color={'success.main'}>
                  <CheckCircleOutlineIcon />
                </Box>
              </Stack>
              <Box>
                <Button disabled fullWidth size={'large'} variant={'contained'}>ارتقا به سطح 3</Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}