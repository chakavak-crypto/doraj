import {Avatar, Box, Card, CardContent, Stack, Typography} from "@mui/material";

export default function CkkAssetStatType1(){
  return (
    <Card variant={'outlined'}>
      <CardContent sx={{px: 0.5, py: '4px!important'}}>
        <Stack direction={'row'} spacing={0.5} justifyContent={'space-between'} alignItems={'center'}>
          <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
            <Avatar src={'https://assets.rabsana.ir/insecure/s:20:20/g:sm/plain/local:///icons/svg/color/btc.svg'} sx={{width: 20, height: 20}} />
            <Box>
              <Typography>بیتکوین/ریال</Typography>
              <Typography fontSize={'smaller'} color={'text.secondary'}>BTC/USDT</Typography>
            </Box>
          </Stack>
          <Box>
            <Typography>19,000,213 ریال</Typography>
            <Typography>~ 4,512 USDT</Typography>
          </Box>
          <Box>
            <Typography color={'text.secondary'}>تغییرات ۲۴h</Typography>
            <Typography>۰.۰۳۴٪</Typography>
          </Box>
          <Box>
            <Typography color={'text.secondary'}>بیشترین قیمت</Typography>
            <Typography>123,499,000</Typography>
          </Box>
          <Box>
            <Typography color={'text.secondary'}>کمترین قیمت</Typography>
            <Typography>123,300,000</Typography>
          </Box>
          <Box>
            <Typography color={'text.secondary'}>حجم معاملات</Typography>
            <Typography>123,300,000</Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}