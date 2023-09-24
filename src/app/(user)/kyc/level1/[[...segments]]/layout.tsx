import {Box, Button, Grid, Stack, Typography} from "@mui/material";
import CkkBreadcrumbsType1 from "@/components/CkkBreadcrumbsType1";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import CkkContent from "@/components/CkkContent/CkkContent";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {ReactNode, useMemo} from "react";
import CkkStepperType1 from "@/components/CkkStepperType1";

export default function KycLevel1Layout(
  {
    params,
    email,
    mobile,
    bank,
    id
  }: {
  params: {segments?: string[]},
  email: ReactNode,
  mobile: ReactNode,
  bank: ReactNode,
  id: ReactNode
}){
  const form = useMemo(() => {
    const [type] =
      params.segments === undefined ?
        ['email']
        : params.segments;

    if(type === 'email'){
      return email;
    }else if(type === 'mobile'){
      return mobile;
    }else if(type === 'id'){
      return id;
    }else if(type === 'bank'){
      return bank;
    }
  }, [params])
  return (
    <CkkContent>
      <Stack sx={{display: {xs: 'none', sm: 'flex'}}} direction={'row'} justifyContent={'space-between'} py={1}>
        <CkkBreadcrumbsType1>
          <Link underline="none" href="/">
            <HomeIcon/>
          </Link>
          <Link underline="none" href="/security">
            امنیت
          </Link>
          <Typography color="text.primary">احراز هویت</Typography>
        </CkkBreadcrumbsType1>
        <Box>
          <Button
            color={'inherit'}
            size={'small'}
            component={Link}
            href={'/kyc/levels'}
            endIcon={<KeyboardArrowLeftIcon />}
          >بازگشت</Button>
        </Box>
      </Stack>
      <Box sx={{mb: 2}}>
        <Typography fontWeight={'bold'}>فرآیند ارتقاع به سطح یک</Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} md={10} lg={7} xl={5}>
          <CkkStepperType1>
            {form}
          </CkkStepperType1>
        </Grid>
      </Grid>
    </CkkContent>
  );
}