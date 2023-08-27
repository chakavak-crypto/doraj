import {Box, CardContent, Stack} from "@mui/material";
import CkkCardType3 from "@/components/CkkCardType3";

export default function OrderCard(){
  return (
    <CkkCardType3 sx={{
      mx: 'auto'
    }}>
      <CardContent>
        <Stack spacing={2}>
          <Box>switch buttons</Box>
          <Box>Select currency</Box>
          <Box>Rate</Box>
          <Box>Pay input</Box>
          <Box>Get input</Box>
          <Box>Commission</Box>
          <Box>Total pay</Box>
          <Box>Discount</Box>
          <Box>submit order button</Box>
        </Stack>
      </CardContent>
    </CkkCardType3>
  );
}