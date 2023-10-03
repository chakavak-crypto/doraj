import CkkContent from "@/components/CkkContent/CkkContent";
import {Box, Button, Skeleton, Stack, Typography} from "@mui/material";
import CkkBreadcrumbsType1 from "@/components/CkkBreadcrumbsType1";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {ReactNode, useMemo} from "react";

export const metadata = {
  title: 'ثبت سفارش',
  description: 'خرید و فروش آسان',
};

interface OrderLayoutProps {
  params: {
    type: 'buy' | 'sell',
    asset?: 'string',
    volume?: number,
  }
}

export default function OrderLayout({children, params, buy_crypto, sell_crypto, ecurrencies}: {
  children: ReactNode,
  params: {segments?: string[]},
  buy_crypto: ReactNode,
  sell_crypto: ReactNode,
  ecurrencies: ReactNode
}) {

  const form = useMemo(() => {
    const [orderType, asset, volume] =
      params.segments === undefined ?
        [undefined, undefined, undefined]
        : params.segments;

    if(orderType === 'sell'){
      return sell_crypto;
    }
    return buy_crypto;
  }, [params])
  return (
    <CkkContent>
      <Stack sx={{display: {xs: 'none', sm: 'flex'}}} direction={'row'} justifyContent={'space-between'} py={1}>
        <CkkBreadcrumbsType1>
          <Link underline="none" href="/">
            <HomeIcon/>
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
            endIcon={<AssignmentIcon/>}
          >تاریخچه سفارش ها</Button>
        </Box>
      </Stack>
      <Box sx={{mt: 3}}>
        {form}
      </Box>
    </CkkContent>
  );
}
