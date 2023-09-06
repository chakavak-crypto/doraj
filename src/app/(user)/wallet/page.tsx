import * as React from 'react';
import CkkContent from "@/components/CkkContent/CkkContent";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {LtrTheme} from "@/tools/theme/ThemeRegistry";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import CkkAssetsTableType1 from "@/components/CkkAssetsTableType1";
import SearchIcon from '@mui/icons-material/Search';

export default function WalletPage() {

  return (
    <CkkContent>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Box py={1}>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <Typography variant={'h6'}>جزییات موجودی</Typography>
            <IconButton size={'small'}><VisibilityIcon color={'secondary'}/></IconButton>
          </Stack>
          <Typography color={'text.secondary'} variant={'subtitle1'}>لورم ایپسوم متن ساختگی با تولد نامفهمو</Typography>
        </Box>
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
          <Button variant={'contained'}>تومان</Button>
          <Button color={'secondary'}>USDT</Button>
        </Stack>
      </Stack>
      <Divider sx={{mx: -1.5}}/>
      <Grid container py={1}>
        <Grid item xs={12} md={3} sm={4} spacing={2} container>
          <Grid item xs={12}>
            <Typography variant={'body1'} fontWeight={'bolder'} color={'text.secondary'}>ارزش کل موجودی ها</Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack direction={['row-reverse', 'column']} alignItems={['center', 'start']} spacing={1}
                   justifyContent={['start']}>
              <Box display={'flex'} alignItems={'center'}>
                <Typography variant={'h5'} fontWeight={'bolder'}>290,134,321,000</Typography>
                <Typography color={'text.secondary'} pl={0.5}>تومان</Typography>
              </Box>
              <LtrTheme>
                <Typography sx={{mr: 0.5}} fontFamily={'var(--roboto)'} variant={'body2'} color={'text.secondary'}>≈
                  800.15 USDT</Typography>
              </LtrTheme>
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3} sm={4} spacing={2} container>
          <Grid item xs={12}>
            <Typography variant={'body1'} fontWeight={'bolder'} color={'text.secondary'}>موجودی در دسترس</Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack direction={['row-reverse', 'column']} alignItems={['center', 'start']} spacing={1}
                   justifyContent={['start']}>
              <Box display={'flex'} alignItems={'center'}>
                <Typography variant={'h5'} fontWeight={'bolder'}>290,134,321,000</Typography>
                <Typography color={'text.secondary'} pl={0.5}>تومان</Typography>
              </Box>
              <LtrTheme>
                <Typography sx={{mr: 0.5}} fontFamily={'var(--roboto)'} variant={'body2'} color={'text.secondary'}>≈
                  800.15 USDT</Typography>
              </LtrTheme>
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3} sm={4} spacing={2} container>
          <Grid item xs={12}>
            <Typography variant={'body1'} fontWeight={'bolder'} color={'text.secondary'}>محدودیت برداشت
              روزانه</Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack direction={['row-reverse', 'column']} alignItems={['center', 'start']} spacing={1}
                   justifyContent={['start']}>
              <Box display={'flex'} alignItems={'center'}>
                <Typography variant={'h5'} fontWeight={'bolder'}>290,134,321,000</Typography>
                <Typography color={'text.secondary'} pl={0.5}>تومان</Typography>
              </Box>
              <Link pr={1} underline={'none'} href={'/levels'}>مشاهده سطوح کاربری</Link>
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card sx={{bgcolor: 'secondary.dark'}}>
            <CardHeader
              disableTypography
              action={<IconButton color={'inherit'}><ExpandCircleDownOutlinedIcon
                sx={{transform: 'rotate(90deg)'}}/></IconButton>}
              title={'سود و زیان دیروز:'}
              sx={{
                fontWeight: 'bolder',
                py: 0.5,
                px: 1,
              }}
            />
            <CardContent sx={{px: 1, py: 0.25}}>
              <Typography color={'error'} variant={'body1'} fontWeight={'bolder'}>
                <span dir={'ltr'}>-16,000</span>
                <span style={{paddingRight: 4}}>تومان</span>
              </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'space-between'}}>
              <Typography color={'error'} sx={{display: 'flex', alignItems: 'center'}}>
                <span>0.1%</span>
                <KeyboardArrowDownIcon fontSize={'smaller'}/>
              </Typography>
              <Button size={'small'} color={'info'} variant={'contained'}>پورتفولیو لحظه ای</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Divider sx={{mx: -1.5}}/>
      <Stack py={1} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
          <TextField
            size={'small'}
            placeholder={'جستجو'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color={'secondary'}/>
                </InputAdornment>
              ),
            }}
          />
          <Button color={'secondary'} variant={'outlined'}>تبدیل همه موجودی ها به تومان</Button>
        </Stack>
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
          <Button color={'secondary'} variant={'outlined'} size={'small'}>مقادیر اندک</Button>
          <Button
            variant={'outlined'}
            size={'small'}
            color={'secondary'}
            startIcon={<RefreshIcon/>}
          >بروزرسانی</Button>
        </Stack>
      </Stack>
      <Box sx={{mx: -1.5}}>
        <CkkAssetsTableType1/>
      </Box>
    </CkkContent>
  );
}