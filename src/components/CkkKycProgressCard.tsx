'use client';

import {Box, Card, CardContent, Stack, Typography} from "@mui/material";
import CkkRoundedLinearProgress from "@/components/CkkRoundedLinearProgress";
import {useTranslation} from "@/app/i18n/client";

export default function CkkKycProgressCard(){
  const [t] = useTranslation();
  return (
    <Card raised>
      <CardContent>
        <Typography textAlign={'center'} fontWeight={300} mb={1}>{t('kyc_auto_verification')}</Typography>
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
      </CardContent>
    </Card>
  );
}