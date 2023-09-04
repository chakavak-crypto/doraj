'use client';

import {Box, Button, Card, Grid, InputAdornment, Stack, TextField, Typography} from "@mui/material";
import CkkSelectTyp1 from "@/components/CkkSelectTyp1";
import CkkTextFieldWithPasteButton from "@/components/CkkTextFieldWithPasteButton";
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CkkSelectType2 from "@/components/CkkSelectTyp2/CkkSelectType2";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import CkkSelectType3 from "@/components/CkkSelectType3";
import CkkCurrencyFieldType1 from "@/components/CkkCurrencyFieldType1";

export default function IrtWithdrawalCard(){
  return (
    <Box>
      <Stack spacing={2}>
        <Stack direction={'row'} justifyContent={'end'} alignItems={'center'}>
          <Button
            sx={{
              '& .MuiButton-endIcon': {
                margin: 0,
              }
            }}
            size={'small'}
            endIcon={<AddIcon sx={{fontSize: '15px!important'}}/>}
          >افزودن شماره شبا</Button>
        </Stack>
        <Grid
          elevation={0}
          container
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            p: '8px!important',
            mt: '0!important',
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
            >انتخاب شبا</Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <CkkSelectType3 />
          </Grid>
        </Grid>
        <Box>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography>مقدار</Typography>
            <Typography>
              <Box component={'span'} color={'text.secondary'}>موجودی شما:</Box>
              <Box component={'span'} ml={'4px'} fontWeight={'bolder'}>150,000,000 تومان</Box>
            </Typography>
          </Stack>
          <TextField
            fullWidth
            size={'small'}
            helperText={'حداقل مقدار برداشت 100,000 تومان می باشد'}
            sx={{
              '& .MuiInputBase-root':{
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
          <Typography>5,000 تومان</Typography>
        </Stack>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography fontWeight={'bold'} color={'text.secondary'}>جمع کل دریافتی</Typography>
          <Typography fontWeight={'bold'}>1,000,000 تومان</Typography>
        </Stack>
        <Box>
          <Button fullWidth variant={'contained'}>برداشت</Button>
        </Box>
      </Stack>
    </Box>
  );
}