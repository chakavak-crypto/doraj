import CkkContent from "@/components/CkkContent/CkkContent";
import CkkAlertType1 from "@/components/CkkAlertType1";
import {Box, Stack, Tab, Tabs, Typography} from "@mui/material";
import CkkBreadcrumbsType1 from "@/components/CkkBreadcrumbsType1";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import {ReactNode} from "react";

const IRT_OPTION = 'irt';
const CRYPTO_OPTION = 'crypto';
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
export default function WithdrawLayout({children, crypto, irt, params}: {
  children: ReactNode,
  crypto: ReactNode,
  irt: ReactNode,
  params: { segments?: Array<string> }
}) {
  let tab = CRYPTO_OPTION;
  if (Array.isArray(params.segments) && params.segments.length > 0) {
    let firstSegment = params.segments[0];
    if (firstSegment.toLowerCase() === IRT_OPTION) {
      tab = 'irt';
    }
  }

  return (
    <CkkContent>
      <CkkAlertType1 severity={'error'} variant="filled">
        این یک متن تستی است
      </CkkAlertType1>
      <Stack sx={{display: {xs: 'none', sm: 'flex'}}} direction={'row'} justifyContent={'space-between'} py={1}>
        <CkkBreadcrumbsType1>
          <Link underline="none" href="/">
            <HomeIcon/>
          </Link>
          <Link underline="none" href="/wallet">
            کیف پول
          </Link>
          <Typography color="text.primary">برداشت</Typography>
        </CkkBreadcrumbsType1>
      </Stack>
      <Box sx={{mt: 3, borderBottom: 1, borderColor: 'divider'}}>
        <Tabs sx={{height: '40px', minHeight: '40px'}} value={tab === IRT_OPTION ? 1 : 0}
              aria-label="withdraw options tab">
          <Tab sx={tabStyles} component={Link} href={'/withdraw/crypto'} label="رمز ارز"/>
          <Tab sx={tabStyles} component={Link} href={'/withdraw/irt'} label="شتابی"/>
        </Tabs>
      </Box>
      <Box sx={{mt: 2}}>
        {tab === IRT_OPTION ? irt : crypto}
      </Box>
    </CkkContent>
  );
}