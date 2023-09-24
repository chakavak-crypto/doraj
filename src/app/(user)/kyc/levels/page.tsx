import {Box, Stack, Typography} from "@mui/material";
import CkkBreadcrumbsType1 from "@/components/CkkBreadcrumbsType1";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import CkkKycAlert from "@/components/CkkKycAlert";
import CkkContent from "@/components/CkkContent/CkkContent";
import CkkKycProgressCard from "@/components/CkkKycProgressCard";
import CkkKycLevels from "@/components/CkkKycLevels";

export default function KycLevelsPage(){
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
      </Stack>
      <CkkKycAlert />
      <Box mt={2}>
        <CkkKycProgressCard />
      </Box>
      <Box mt={2}>
        <CkkKycLevels />
      </Box>
    </CkkContent>
  );
}