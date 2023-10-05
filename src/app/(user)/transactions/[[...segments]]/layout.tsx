import {ReactNode} from "react";
import CkkContent from "@/components/CkkContent/CkkContent";
import {Box, Button, Stack, Tab, Tabs, Typography} from "@mui/material";
import CkkBreadcrumbsType1 from "@/components/CkkBreadcrumbsType1";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import RefreshIcon from '@mui/icons-material/Refresh';
import CkkButtonSwitch from "@/components/CkkButtonSwitch";

const DEPOSITS_TAB = 'deposits';
const WITHDRAWALS_TAB = 'withdrawals';
const FIAT_TYPE = 'fiat';
const CRYPTO_TYPE = 'crypto';

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
  fiat_withdrawals: ReactNode,
  fiat_deposits: ReactNode,
  crypto_withdrawals: ReactNode,
  crypto_deposits: ReactNode,
  params: {
    segments?: Array<string>
  },
  searchParams?: any
}
export const metadata = {
  title: 'تاریخچه واریز و برداشت',
  description: 'لیست تمامی تراکنش های واریز و برداشت رمزارزها و تومان',
};
export default function TransactionsLayout({
                                             fiat_withdrawals,
                                             fiat_deposits,
                                             crypto_withdrawals,
                                             crypto_deposits,
                                             params}: TransactionsLayoutProps){
  let tab = DEPOSITS_TAB;
  let type = FIAT_TYPE;
  let fiat_deposit_text = 'واریز تومان';
  let fiat_withdrawal_text = 'برداشت تومان';
  let crypto_deposit_text = 'واریز ارز';
  let crypto_withdrawal_text = 'برداشت ارز';
  if (Array.isArray(params.segments) && params.segments.length > 0) {
    let firstSegment = params.segments[0];
    if (firstSegment.toLowerCase() === WITHDRAWALS_TAB) {
      tab = WITHDRAWALS_TAB;
    }
  }

  if (Array.isArray(params.segments) && params.segments.length > 1) {
    let secondSegment = params.segments[1];
    if (secondSegment.toLowerCase() === CRYPTO_TYPE) {
      type = CRYPTO_TYPE;
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
          <Tab sx={tabStyles} component={Link} href={`/transactions/${DEPOSITS_TAB}/${type}`} label="واریز"/>
          <Tab sx={tabStyles} component={Link} href={`/transactions/${WITHDRAWALS_TAB}/${type}`} label="برداشت"/>
        </Tabs>
      </Box>
      <Box mt={1} style={{display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
        <CkkContent>
          <Stack spacing={2}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Stack direction={'row'} spacing={1}>
                <Button
                  size={'small'}
                  variant={type === CRYPTO_TYPE ? 'contained' : 'outlined'}
                  component={Link}
                  href={`/transactions/${tab}/${CRYPTO_TYPE}`}
                >
                  {tab === WITHDRAWALS_TAB ? crypto_withdrawal_text : crypto_deposit_text}
                </Button>
                <Button
                  size={'small'}
                  variant={type === FIAT_TYPE ? 'contained' : 'outlined'}
                  component={Link}
                  href={`/transactions/${tab}/${FIAT_TYPE}`}
                >
                  {tab === WITHDRAWALS_TAB ? fiat_withdrawal_text : fiat_deposit_text}
                </Button>
              </Stack>
              <Box>
                <Button
                  size={'small'}
                  variant={'outlined'}
                  color={'inherit'}
                  startIcon={<RefreshIcon />}
                >بروزرسانی</Button>
              </Box>
            </Stack>
            {tab === WITHDRAWALS_TAB && type === CRYPTO_TYPE ? crypto_withdrawals : <></>}
            {tab === WITHDRAWALS_TAB && type === FIAT_TYPE ? fiat_withdrawals : <></>}
            {tab === DEPOSITS_TAB && type === CRYPTO_TYPE ? crypto_deposits : <></>}
            {tab === DEPOSITS_TAB && type === FIAT_TYPE ? fiat_deposits : <></>}
          </Stack>
        </CkkContent>
      </Box>
    </CkkContent>
  );
}