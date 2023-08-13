import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import MediaCard from '@/components/MediaCard';
import {useTranslation} from "./i18n";

export default async function HomePage() {
  const { t } = await useTranslation('messages');
  return (
    <Box
      sx={{
        display: 'flex',
        p: 2,
        minHeight: '85vh'
      }}
    >
      <Box>
        <Alert severity="info" sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>{t('hello')} 👋</AlertTitle>
          This app uses the Next.js App Router and Material UI v5.
        </Alert>
      </Box>
    </Box>
  );
}
