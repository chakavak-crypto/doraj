import CkkContent from "@/components/CkkContent/CkkContent";
import {Box, Grid, Stack} from "@mui/material";
import CkkAssetStatType1 from "@/components/CkkAssetStatType1";
import CkkTechnicalChart from "@/components/CkkTechnicalChart";
import CkkPairsCardType1 from "@/components/CkkPairsCardType1";
import CkkTradesCardType1 from "@/components/CkkTradesCardType1";
import CkkOrderBookType1 from "@/components/CkkOrderBookType1";

export default function TradePage() {
  return (
    <CkkContent>
      <Grid container spacing={1}>
        <Grid item lg={2}>
          <Stack spacing={1}>
            <Box>
              <CkkPairsCardType1 />
            </Box>
            <Box>
              <CkkTradesCardType1 />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Stack spacing={1}>
            <Box>
              <CkkAssetStatType1 />
            </Box>
            <Box>
              <CkkTechnicalChart
                theme="dark"
                width="100%"
                symbol={'BTCUSDT'}
                locale={'fa_IR'}
                height={400}
                hide_top_toolbar={true}
                hide_legend={true}
                allow_symbol_change={false}
                save_image={false}
                style={'3'}
                copyrightStyles={{parent: {display: 'none'}}}
              />
            </Box>
          </Stack>
        </Grid>
        <Grid item lg={3}>
          <CkkOrderBookType1 />
        </Grid>
        <Grid item xs={12}>orders</Grid>
      </Grid>
    </CkkContent>
  );
}