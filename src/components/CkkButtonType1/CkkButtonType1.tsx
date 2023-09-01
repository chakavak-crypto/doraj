import {Avatar, Box, Button, ButtonProps, Divider, Typography} from "@mui/material";

export default function CkkButtonType1(props: ButtonProps) {
  return (
    <Button
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
      variant={'contained'}
      disableElevation
      fullWidth
      startIcon={<Avatar src={'/btc.jpg'} sx={{width: 15, height: 15}}/>}
      {...props}
    >
      <Typography
        display={'inline-block'}
        noWrap
        maxWidth={'6rem'}
        component={'span'}>بیت کوین</Typography>
      <Divider
        sx={{height: 14, mx: '2px', my: '2px'}}
        orientation={'vertical'} flexItem/>
      <Box component={'span'}>BTC</Box>
    </Button>
  );
}