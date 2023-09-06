'use client';

import {Avatar, Box, Button, CardContent, Grid, Stack, Tooltip, Typography} from "@mui/material";
import CkkCardType3 from "@/components/CkkCardType3";
import CkkButtonSwitch from "@/components/CkkButtonSwitch";
import {useState} from "react";
import {useTranslation} from "@/app/i18n/client";
import CkkSelectTyp1 from "@/components/CkkSelectTyp1";
import CkkCurrencyFieldType1 from "@/components/CkkCurrencyFieldType1";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Link from "next/link";
import {LtrTheme} from "@/tools/theme/ThemeRegistry";
import DeleteIcon from '@mui/icons-material/Delete';

export default function OrderCard() {
  const [value, setValue] = useState<0 | 1>(0)
  const [t] = useTranslation();
  return (
    <CkkCardType3 sx={{
      mx: 'auto'
    }}>
      <CardContent>
        <Stack spacing={2}>
          <Box>
            <CkkButtonSwitch
              value={value}
              onChange={(newVal) => setValue(newVal)}
              firstTitle={t('buy')}
              firstButtonProps={{
                color: value === 0 ? 'success' : 'inherit'
              }}
              secondTitle={t('sell')}
              secondButtonProps={{
                color: value === 1 ? 'error' : 'inherit'
              }}
              containerProps={{
                bgcolor: 'background.paper',
                borderRadius: '8px',
                p: 0.5
              }}
            />
          </Box>
          <Grid
            elevation={0}
            container
            sx={{
              display: 'flex',
              flexDirection: ['column', 'row'],
              p: '8px!important',
              justifyContent: 'space-between',
              borderStyle: 'solid',
              borderWidth: 2,
              borderColor: 'divider',
              bgcolor: 'background.default',
              borderRadius: (theme) => `${theme.shape.borderRadius}px`
            }}
          >
            <Grid
              item
              xs={12} md={3}
              sx={{my: 'auto'}}>
              <Typography
                noWrap
                sx={{
                  py: 0,
                  pb: ['2px', 0],
                  px: '2px',
                  '& .MuiTypography-root': {
                    fontSize: 'larger',
                  }
                }}
              >{t('انتخاب ارز')}</Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <CkkSelectTyp1/>
            </Grid>
          </Grid>
          <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={1}>
            <Avatar src={'/btc.jpg'} sx={{width: 25, height: 25}}/>
            <LtrTheme>
              <Typography component={'span'} fontWeight={'bolder'} noWrap>1 BTC</Typography>
            </LtrTheme>
            <Typography component={'span'}>≈</Typography>
            <Tooltip title={'20,451,370,000 تومان'}>
              <Typography component={'span'} noWrap>20,451,370,000 تومان</Typography>
            </Tooltip>
            <Typography component={'span'}>≈</Typography>
            <LtrTheme>
              <Typography component={'span'} noWrap>15,3000 USDT</Typography>
            </LtrTheme>
          </Stack>
          <Box>
            <Stack direction={'row'} justifyContent={'space-between'} mb={'2px'}>
              <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <Box component={'span'} color={'text.secondary'}>موجودی شما:</Box>
                <Box component={'span'} mx={'3px'} fontWeight={'bolder'}>134,250,000</Box>
                <Box component={'span'}>تومان</Box>
              </Stack>
              <Button
                size={'small'}
                variant="text"
                endIcon={<CreditCardIcon/>}
                component={Link}
                href={'/wallet'}
              >واریز تومان</Button>
            </Stack>
            <CkkCurrencyFieldType1
              InputProps={{
                fullWidth: true,
                size: 'small',
                decimalScale: 0
              }}
              hasSlider
              label={'پرداخت می کنم'}
              icon={'/irt.jpg'}
              symbol={'IRT'}
              base={100000}
              max={100000}
            />
          </Box>
          <Box>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mb={'2px'}>
              <Stack direction={'row'} spacing={1}>
                <Box component={'span'} color={'text.secondary'}>موجودی شما:</Box>
                <Box component={'span'} fontWeight={'bolder'}>
                  <Box component={'span'}>0.045</Box>
                </Box>
                <Box component={'span'}>BTC</Box>
              </Stack>
            </Stack>
            <CkkCurrencyFieldType1
              InputProps={{
                fullWidth: true,
                size: 'small',
              }}
              label={'دریافت می کنم'}
              icon={'/btc.jpg'}
              symbol={'BTC'}
            />
          </Box>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography color={'text.secondary'}>کارمزد</Typography>
            <Typography>12,000 تومان</Typography>
          </Stack>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Typography noWrap>
              <Box component={'span'} color={'text.secondary'}>کد تخفیف:</Box>
              <Box
                component={'span'}
                fontWeight={'bolder'}
                fontSize={'smaller'}
                fontFamily={'var(--roboto)'}
              >&nbsp; ecd75fg8</Box>
            </Typography>
            <Typography noWrap fontSize={'smaller'}>3,450,000 تومان</Typography>
            <Button size={'small'} color={'error'} endIcon={<DeleteIcon/>}>حذف</Button>
          </Stack>
          <Stack direction={'row'} justifyContent={'end'}>
            <Typography color={'text.secondary'} sx={{textDecoration: 'line-through'}}>120,000,431,000
              تومان</Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography fontWeight={'bold'} color={'text.secondary'}>جمع کل پرداختی</Typography>
            <Typography fontWeight={'bold'}>120,000,431,000 تومان</Typography>
          </Stack>
          <Box>
            <Button>کد تخفیف دارید؟</Button>
          </Box>
          <Box>
            <Button
              fullWidth
              variant={'contained'}
              color={'success'}
            >{t('buy')}</Button>
          </Box>
        </Stack>
      </CardContent>
    </CkkCardType3>
  );
}