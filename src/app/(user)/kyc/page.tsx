import CkkContent from "@/components/CkkContent/CkkContent";
import CkkBreadcrumbsType1 from "@/components/CkkBreadcrumbsType1";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import {Box, Stack, Typography} from "@mui/material";
import CkkKycAlert from "@/components/CkkKycAlert";
import CkkCurrentKycLevelCard from "@/components/CkkCurrentKycLevelCard";


export default function KycPage(){
  return (
    <CkkContent>
      <Stack sx={{display: {xs: 'none', sm: 'flex'}}} direction={'row'} justifyContent={'space-between'} py={1}>
        <CkkBreadcrumbsType1>
          <Link underline="none" href="/">
            <HomeIcon/>
          </Link>
          <Link underline="none" href="/wallet">
            امنیت
          </Link>
          <Typography color="text.primary">احراز هویت</Typography>
        </CkkBreadcrumbsType1>
      </Stack>
      <CkkKycAlert />
      <Box sx={{
        pt: 2,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <CkkCurrentKycLevelCard />
      </Box>
    </CkkContent>
  );
}