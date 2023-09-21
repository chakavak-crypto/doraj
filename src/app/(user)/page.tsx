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
import CkkTransactionsSummeryCardType1 from "@/components/CkkTransactionsSummeryCardType1";
import CkkEventCardType1 from "@/components/CkkEventCardType1";
import CkkCurrenciesCardType1 from "@/components/CkkCurrenciesCardType1";

export default async function HomePage() {
  const {t} = await useTranslation('messages');

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={9}>
        <CkkContent>
          <CkkAlertType1 severity={'error'} variant="filled">
            این یک متن تستی است
          </CkkAlertType1>
          <Box mt={1}>
            <CkkCurrenciesCardType1 />
          </Box>
        </CkkContent>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Stack spacing={1}>
          <CkkContent>
            <CkkWalletSummeryCardType1/>
          </CkkContent>
          <CkkTransactionsSummeryCardType1 />
          <CkkEventCardType1 />
        </Stack>
      </Grid>
    </Grid>
  );
}
