import CkkCardType3 from "@/components/CkkCardType3";
import {Box, CardContent, Skeleton, Stack} from "@mui/material";

export default function LoadingCard(){
  return (
    <CkkCardType3 sx={{
      mx: 'auto'
    }}>
      <CardContent>
        <Stack spacing={2}>
          <Box>
            <Skeleton variant="rounded"  height={36} />
          </Box>
          <Box>
            <Skeleton variant="rounded" height={64} />
          </Box>
          <Box>
            <Skeleton sx={{mx: 'auto'}} variant="rounded" height={18} width={'80%'} />
          </Box>
          <Box>
            <Skeleton variant="rounded" height={40} />
          </Box>
          <Box>
            <Skeleton variant="rounded" height={40} />
          </Box>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Skeleton variant="rounded"  height={20} width={70} />
            <Skeleton variant="rounded"  height={20} width={100} />
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Skeleton variant="rounded"  height={20} width={100} />
            <Skeleton variant="rounded"  height={20} width={125} />
          </Stack>
          <Box>
            <Skeleton variant="rounded"  height={33} width={100} />
          </Box>
          <Box>
            <Skeleton variant="rounded"  height={36} />
          </Box>
        </Stack>
      </CardContent>
    </CkkCardType3>
  );
}