'use client';

import {Box, Button, CardContent, Stack, Typography} from "@mui/material";
import CkkCardType3 from "@/components/CkkCardType3";
import CkkButtonSwitch from "@/components/CkkButtonSwitch";
import {useState} from "react";
import {useTranslation} from "@/app/i18n/client";
import CkkSelectTyp1 from "@/components/CkkSelectTyp1";
import CkkCurrencyFieldType1 from "@/components/CkkCurrencyFieldType1";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Link from "next/link";

export default function OrderCard(){
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
          <Box>
            <CkkSelectTyp1 />
          </Box>
          <Box>

          </Box>
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
                endIcon={<CreditCardIcon />}
                component={Link}
                href={'/wallet'}
              >واریز تومان</Button>
            </Stack>
            <CkkCurrencyFieldType1
              InputProps={{
                fullWidth: true,
                size: 'small',
              }}
              hasSlider
              label={'پرداخت می کنم'}
              icon={'/irt.jpg'}
              symbol={'IRT'}
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
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography>کارمزد</Typography>
            <Typography>12,000 تومان</Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography fontSize={'larger'} fontWeight={'bold'}>جمع کل پرداختی</Typography>
            <Typography fontSize={'larger'} fontWeight={'bold'}>12,431,000 تومان</Typography>
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