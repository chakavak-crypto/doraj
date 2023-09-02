import CkkContent from "@/components/CkkContent/CkkContent";
import CkkAlertType1 from "@/components/CkkAlertType1";
import {Box, Button, Stack, Typography} from "@mui/material";
import CkkBreadcrumbsType1 from "@/components/CkkBreadcrumbsType1";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {ReactNode} from "react";

export default function WithdrawLayout({children, crypto, irt}: {
  children: ReactNode,
  crypto: ReactNode,
  irt: ReactNode,
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
          <Link underline="none" href="/wallet">
            کیف پول
          </Link>
          <Typography color="text.primary">برداشت</Typography>
        </CkkBreadcrumbsType1>
      </Stack>
      <Box sx={{mt: 3}}>
        {children}
      </Box>
    </CkkContent>
  );
}