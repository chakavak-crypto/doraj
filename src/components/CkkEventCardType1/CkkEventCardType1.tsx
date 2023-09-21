'use client';

import CkkContent from "@/components/CkkContent/CkkContent";
import {Box, Button, IconButton, Stack, Typography} from "@mui/material";
import {default as NextLink} from "next/link";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import * as React from "react";
import {useTranslation} from "@/app/i18n/client";

export default function CkkEventCardType1(){
  const [t] = useTranslation();
  return (
    <CkkContent>
      <Stack spacing={1}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography fontWeight={'bold'}>{t('announcement')}</Typography>
        </Stack>
        <Typography>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
        </Typography>
        <Stack direction={'row'} justifyContent={'end'}>
          <Button>{t('show')}</Button>
        </Stack>
      </Stack>
    </CkkContent>
  );
}