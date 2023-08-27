import CkkContent from "@/components/CkkContent/CkkContent";
import CkkAlertType1 from "@/components/CkkAlertType1";
import {Box, Button, Stack, Typography} from "@mui/material";
import CkkBreadcrumbsType1 from "@/components/CkkBreadcrumbsType1";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {ReactNode} from "react";

interface OrderLayoutProps{
  params: {
    type: 'buy' | 'sell',
    asset?: 'string',
    volume?: number,
  }
}
export default function OrderLayout({children}: {
  children: ReactNode
}){
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
        {children}
      </Box>
    </CkkContent>
  );
}