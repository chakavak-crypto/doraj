import Box from "@mui/material/Box";
import {Divider} from "@mui/material";
import * as React from "react";
import {useTranslation} from "@/app/i18n/client";

export interface GreetingProps{
  name: string;
  size?: 'large' | 'small'
}
export default function Greeting(props: GreetingProps){
  const {name} = props;
  const [t] = useTranslation();
  const fontSize = props.size === 'small' ? '0.8rem': 'inherit';
  return (
    <Box sx={{display: 'flex', fontSize: fontSize}}>
      <Box fontSize={'larger'} component={'span'}>{t('hello')}</Box>,
      <Box fontSize={'larger'} fontWeight={'bold'} mx={1} component={'span'}>{name}</Box>
      <Divider orientation={'vertical'} />
      <Box sx={{display: 'flex', alignSelf: 'center'}} component={'span'} mx={1}>{t('welcome_to_dashboard')}</Box>
    </Box>
  );
}