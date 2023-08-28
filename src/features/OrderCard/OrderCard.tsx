'use client';

import {Box, Button, CardContent, Stack, Typography} from "@mui/material";
import CkkCardType3 from "@/components/CkkCardType3";
import CkkToggleButtonsType1 from "@/components/CkkToggleButtonsType1";
import CkkButtonSwitch from "@/components/CkkButtonSwitch";
import {useState} from "react";
import {useTranslation} from "@/app/i18n/client";
import CkkSelectTyp1 from "@/components/CkkSelectTyp1";

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
          <Box>Pay input</Box>
          <Box>Get input</Box>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography>کارمزد</Typography>
            <Typography>12,000 تومان</Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography fontSize={'larger'} fontWeight={'bold'}>جمع کل پرداختی</Typography>
            <Typography fontSize={'larger'} fontWeight={'bold'}>12,431,000 تومان</Typography>
          </Stack>
          <Box>Discount</Box>
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