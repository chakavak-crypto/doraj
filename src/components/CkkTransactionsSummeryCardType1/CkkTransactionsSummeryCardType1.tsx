'use client';

import {Avatar, Box, Divider, Grid, IconButton, Stack, Typography} from "@mui/material";
import {default as NextLink} from "next/link";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import {useTranslation} from "@/app/i18n/client";
import CkkChipType2 from "@/components/CkkChipType2";
import CkkContent from "@/components/CkkContent/CkkContent";
import * as React from "react";

export default function CkkTransactionsSummeryCardType1(){
  const [t] = useTranslation();
  return (
    <Box
      sx={{
        minWidth: 300
      }}
    >
      <CkkContent>
        <Stack
          spacing={1}
        >
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography fontWeight={'bold'}>{t('latest_transactions')}</Typography>
            <IconButton component={NextLink} href={'/transactions'}  size={'small'}>
              <ExpandCircleDownOutlinedIcon color={'secondary'} sx={{
                transform: 'rotate(90deg)'
              }} />
            </IconButton>
          </Stack>
          {[0, 1, 2, 3].map( i => (
            <>
              <Grid container columnSpacing={0.5} alignItems={'center'}>
                <Grid item xs={5}>
                  <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    <Avatar sx={{width: 25, height: 25}} src={'/irt.jpg'} />
                    <Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          '& hr': {
                            mx: 0.5,
                            my: 0.25
                          },
                        }}
                      >
                        <Typography noWrap fontWeight={'bolder'} sx={{maxWidth: '90px'}}>بیت کوین کش</Typography>
                        <Divider orientation={'vertical'} flexItem/>
                        <Box component={'span'}>BTC</Box>
                      </Box>
                      <Typography fontWeight={'bold'} color={'primary.main'}>واریز</Typography>
                    </Box>
                  </Stack>
                </Grid>
                {
                  i%2 === 0 ? (
                    <Grid item xs={3} textAlign={'center'}>
                      <CkkChipType2
                        sx={{
                          width: '90%',
                          textAlign: 'center'
                        }}
                        color={'error'}
                        label={'لغو شد'}
                      />
                    </Grid>
                  ) : (
                    <Grid item xs={3} textAlign={'center'}>
                      <CkkChipType2
                        sx={{
                          width: '90%',
                          textAlign: 'center'
                        }}
                        color={'success'}
                        label={'تایید شد'}
                      />
                    </Grid>
                  )
                }
                <Grid item xs={4}>
                  <Stack textAlign={'right'} sx={{direction: 'rtl', justifyContent: 'space-between'}}>
                    <Typography fontWeight={'bold'}>45,000,000 <Box component={'span'} fontSize={'x-small'} fontWeight={'200'}>IRT</Box></Typography>
                    <Typography color={'text.secondary'} fontSize={'smaller'}>1402/10/12 - 12:54</Typography>
                  </Stack>
                </Grid>
              </Grid>
              <Divider />
            </>
          ))}
        </Stack>
      </CkkContent>
    </Box>
  );
}