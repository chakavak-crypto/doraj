import {ReactNode} from "react";
import CkkContent from "@/components/CkkContent/CkkContent";
import {Box, Stack, Tab, Tabs, Typography} from "@mui/material";
import CkkBreadcrumbsType1 from "@/components/CkkBreadcrumbsType1";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

const DEPOSITS_TAB = 'deposits';
const WITHDRAWALS_TAB = 'withdrawals';
const tabStyles = {
  padding: '1px',
  minWidth: '60px',
  minHeight: '40px',
  '&.Mui-selected': {
    color: 'primary.main',
    backgroundColor: '#242C2E',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px'
  }
};
export interface TransactionsLayoutProps{
  withdrawals: ReactNode,
  deposits: ReactNode,
  params: {
    segments?: Array<string>
  }
}
export const metadata = {
  title: 'تاریخچه واریز و برداشت',
  description: 'لیست تمامی تراکنش های واریز و برداشت رمزارزها و تومان',
};
export default function TransactionsLayout({withdrawals, deposits, params}: TransactionsLayoutProps){
  let tab = DEPOSITS_TAB;
  if (Array.isArray(params.segments) && params.segments.length > 0) {
    let firstSegment = params.segments[0];
    if (firstSegment.toLowerCase() === WITHDRAWALS_TAB) {
      tab = WITHDRAWALS_TAB;
    }
  }

  return (
    <CkkContent>
      <Stack sx={{display: {xs: 'none', sm: 'flex'}}} direction={'row'} justifyContent={'space-between'} py={1}>
        <CkkBreadcrumbsType1>
          <Link underline="none" href="/">
            <HomeIcon/>
          </Link>
          <Link underline="none" href="/wallet">
            کیف پول
          </Link>
          <Typography color="text.primary">تاریخچه واریز و برداشت</Typography>
        </CkkBreadcrumbsType1>
      </Stack>
      <Box sx={{mt: 3, borderBottom: 1, borderColor: 'divider'}}>
        <Tabs sx={{height: '40px', minHeight: '40px'}} value={tab === WITHDRAWALS_TAB ? 1 : 0}
              aria-label="withdraw options tab">
          <Tab sx={tabStyles} component={Link} href={'/transactions/deposits'} label="واریز"/>
          <Tab sx={tabStyles} component={Link} href={'/transactions/withdrawals'} label="برداشت"/>
        </Tabs>
      </Box>
      <Box sx={{mt: 2}}>
        {tab === WITHDRAWALS_TAB ? withdrawals : deposits}
      </Box>
    </CkkContent>
  );
}