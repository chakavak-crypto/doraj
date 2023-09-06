'use client';

import {Box, Button, Grid, InputAdornment, Stack, TextField, Typography} from "@mui/material";
import CkkSelectTyp1 from "@/components/CkkSelectTyp1";
import CkkTextFieldWithPasteButton from "@/components/CkkTextFieldWithPasteButton";
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CkkSelectType2 from "@/components/CkkSelectTyp2/CkkSelectType2";

export default function CryptoWithdrawalCard() {
  return (
    <Box>
      <Stack spacing={2}>
        <Grid
          elevation={0}
          container
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            p: '8px!important',
            justifyContent: 'space-between',
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: 'divider',
            bgcolor: 'background.default',
            borderRadius: (theme) => `${theme.shape.borderRadius}px`
          }}
        >
          <Grid
            item
            xs={12} md={3}
            sx={{my: 'auto'}}>
            <Typography
              noWrap
              sx={{
                py: 0,
                pb: ['2px', 0],
                px: '2px',
                '& .MuiTypography-root': {
                  fontSize: 'larger',
                }
              }}
            >انتخاب ارز</Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <CkkSelectTyp1/>
          </Grid>
        </Grid>
        <Grid
          elevation={0}
          container
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            p: '8px!important',
            justifyContent: 'space-between',
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: 'divider',
            bgcolor: 'background.default',
            borderRadius: (theme) => `${theme.shape.borderRadius}px`
          }}
        >
          <Grid
            item
            xs={12} md={3}
            sx={{my: 'auto'}}>
            <Typography
              noWrap
              sx={{
                py: 0,
                pb: ['2px', 0],
                px: '2px',
                '& .MuiTypography-root': {
                  fontSize: 'larger',
                }
              }}
            >شبکه برداشت</Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <CkkSelectType2/>
          </Grid>
        </Grid>
        <Box>
          <Stack mb={'2px'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography>آدرس بیت کوین مقصد</Typography>
            <Button
              sx={{
                '& .MuiButton-endIcon': {
                  margin: 0,
                }
              }}
              size={'small'}
              endIcon={<AddIcon sx={{fontSize: '15px!important'}}/>}
            >ذخیره آدرس</Button>
          </Stack>
          <CkkTextFieldWithPasteButton
            fullWidth
            sx={{
              '& .MuiInputBase-root': {
                paddingRight: '4px'
              }
            }}
            size={'small'}
            placeholder={'لطفا آدرس بیت کوین مقصد را وارد کنید'}
            helperText="وارد کردن آدرس نادرست ممکن است منجر به از دست رفتن منابع مالی شما شود."
          />
          <Box mt={0.5}>
            <Button
              sx={{
                fontWeight: 'bold'
              }}
              endIcon={<KeyboardArrowDownIcon/>}
            >انتخاب آدرس ذخیره شده</Button>
          </Box>
        </Box>
        <Box>
          <Stack mb={'2px'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography>آدرس تگ/ممو مقصد</Typography>
          </Stack>
          <CkkTextFieldWithPasteButton
            fullWidth
            sx={{
              '& .MuiInputBase-root': {
                paddingRight: '4px'
              }
            }}
            size={'small'}
            placeholder={'لطفا tag(memo)  مقصد را وارد کنید'}
            helperText="این شبکه انتقال tag/memo دارد. حتما آنرا وارد کنید."
          />
        </Box>
        <Box>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography>مقدار</Typography>
            <Typography>
              <Box component={'span'} color={'text.secondary'}>موجودی شما:</Box>
              <Box component={'span'} ml={'4px'} fontWeight={'bolder'}>0.491 BTC</Box>
            </Typography>
          </Stack>
          <TextField
            fullWidth
            size={'small'}
            helperText={'حداقل مقدار برداشت 0.001 BTC می باشد'}
            sx={{
              '& .MuiInputBase-root': {
                paddingRight: '4px'
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    sx={{
                      padding: '6px 8px',
                      minWidth: '30px',
                    }}
                    variant={'contained'}
                    size={'small'}
                    color={'info'}
                  >همه موجودی</Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography color={'text.secondary'}>کارمزد</Typography>
          <Typography>12,000 BTC</Typography>
        </Stack>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography fontWeight={'bold'} color={'text.secondary'}>جمع کل دریافتی</Typography>
          <Typography fontWeight={'bold'}>120,000,431,000 BTC</Typography>
        </Stack>
        <Box>
          <Button fullWidth variant={'contained'}>برداشت</Button>
        </Box>
      </Stack>
    </Box>
  );
}