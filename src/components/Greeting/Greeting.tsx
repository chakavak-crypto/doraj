import Box from "@mui/material/Box";
import {Divider, Stack, Typography} from "@mui/material";
import * as React from "react";
import {useTranslation} from "@/app/i18n/client";

export interface GreetingProps {
  name: string;
  size?: 'large' | 'small',
  orientation?: 'horizontal' | 'vertical'
}


export default function Greeting(props: GreetingProps) {
  const {name, orientation} = props;
  const [t] = useTranslation();
  const fontSize = props.size === 'small' ? '0.8rem' : 'inherit';

  return orientation === 'vertical' ? (
    <Stack sx={{fontSize: fontSize}}>
      <Box sx={{display: 'flex'}}>
        <Box fontSize={'larger'} component={'span'}>{t('hello')}</Box>,
        <Typography maxWidth={100} noWrap fontSize={'larger'} fontWeight={'bold'} mx={1} component={'span'}>{name}</Typography>
      </Box>
      <Box  sx={{display: 'flex', alignSelf: 'start', flexGrow: 1}} component={'span'} fontSize={'small'} color={'text.secondary'}>{t('welcome_to_dashboard')}</Box>
    </Stack>
  ) : (
    <Box sx={{display: 'flex', fontSize: fontSize}}>
      <Box fontSize={'larger'} component={'span'}>{t('hello')}</Box>,
      <Box fontSize={'larger'} fontWeight={'bold'} mx={1} component={'span'}>{name}</Box>
      <Divider orientation={'vertical'}/>
      <Box  sx={{display: 'flex', alignSelf: 'center', flexGrow: 1}} component={'span'} mx={1}>{t('welcome_to_dashboard')}</Box>
    </Box>
  );
}