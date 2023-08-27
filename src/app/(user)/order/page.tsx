import CkkContent from "@/components/CkkContent/CkkContent";
import {Alert, Box, Breadcrumbs, Button, CardContent, Stack, Typography} from "@mui/material";
import {useState} from "react";
import CkkAlertType1 from "@/components/CkkAlertType1";
import Link from "next/link";
import CkkBreadcrumbsType1 from "@/components/CkkBreadcrumbsType1";
import SendIcon from '@mui/icons-material/Send';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from "@mui/icons-material/Home";
import CkkCardType3 from "@/components/CkkCardType3";
//TODO buttons coloring
export default function WalletPage(){

  return (
    <CkkContent>
      <CkkAlertType1 severity={'error'} variant="filled">
        این یک متن تستی است
      </CkkAlertType1>
      <Stack sx={{display: {xs: 'none', sm: 'flex'}}} direction={'row'} justifyContent={'space-between'} py={1}>
        <CkkBreadcrumbsType1>
          <Link underline="none" href="/">
            <HomeIcon />
          </Link>
          <Typography color="text.secondary">
            ثبت سفارش
          </Typography>
          <Typography color="text.primary">خرید و فروش آسان</Typography>
        </CkkBreadcrumbsType1>
        <Box>
          <Button
            size={'small'}
            component={Link}
            href={'/orders'}
            variant={'outlined'}
            color={'inherit'}
            endIcon={<AssignmentIcon />}
          >تاریخچه سفارش ها</Button>
        </Box>
      </Stack>
      <Box sx={{mt: 3}}>
        <CkkCardType3 sx={{
          mx: 'auto'
        }}>
          <CardContent>
            foo
          </CardContent>
        </CkkCardType3>
      </Box>
    </CkkContent>
  );
}