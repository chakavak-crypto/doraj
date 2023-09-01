import CkkContent from "@/components/CkkContent/CkkContent";
import CkkAlertType1 from "@/components/CkkAlertType1";
import {Box, Button, Stack, Typography} from "@mui/material";
import CkkBreadcrumbsType1 from "@/components/CkkBreadcrumbsType1";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {ReactNode} from "react";

export default function WalletLayout({children}: {
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
          <Typography color="text.primary">
            کیف پول
          </Typography>
        </CkkBreadcrumbsType1>
        <Stack direction={'row'} spacing={1}>
          <Button
            size={'small'}
            component={Link}
            href={'/deposit'}
            variant={'contained'}
            color={'primary'}
            endIcon={<AssignmentIcon />}
          >واریز</Button>
          <Button
            size={'small'}
            component={Link}
            href={'/withdraw'}
            variant={'outlined'}
            color={'inherit'}
            endIcon={<AssignmentIcon />}
          >برداشت</Button>
          <Button
            size={'small'}
            component={Link}
            href={'/transactions'}
            variant={'outlined'}
            color={'inherit'}
            endIcon={<AssignmentIcon />}
          >تاریخچه تراکنش ها</Button>
        </Stack>
      </Stack>
      <Box sx={{mt: 3}}>
        {children}
      </Box>
    </CkkContent>
  );
}