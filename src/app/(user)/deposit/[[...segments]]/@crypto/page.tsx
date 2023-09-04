import * as React from 'react';
import CkkContent from "@/components/CkkContent/CkkContent";
import {
  Avatar, Box, Button,
  Card,
  CardContent,
  CardHeader, Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack, Typography
} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import WarningIcon from '@mui/icons-material/Warning';
import CryptoWithdrawalCard from "@/features/CryptoWithdrawalCard";
import RefreshIcon from '@mui/icons-material/Refresh';
import CkkLatestWithdrawalsTableType1 from "@/components/CkkLatestWithdrawalsTableType1";

export default function CryptoWithdrawalPage(){

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} xl={4} lg={5}>
        <CkkContent>
          <CryptoWithdrawalCard />
        </CkkContent>
      </Grid>
      <Grid item xs={12} sm={6} xl={4}>
        <Card variant={'outlined'}>
          <CardHeader
            sx={{
              '& .MuiCardHeader-content': {
                color: 'warning.light'
              }
            }}
            disableTypography
            title={'لطفا پیش از برداشت رمزارز، توضیحات زیر را به دقیق مطالعه نمایید'}
            avatar={
              <WarningIcon color={'warning'} />
            }
          />
          <CardContent>
            <List dense>
              {[0, 1, 2, 3].map((i) => (
                <ListItem key={i} disablePadding>
                  <ListItemIcon sx={{minWidth: '20px'}}>
                    <CircleIcon color={'error'} sx={{fontSize: 10}} />
                  </ListItemIcon>
                  <ListItemText primary={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،و با استفاده از طراحان گرافیک است'}/>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <CkkContent>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
              <Typography fontWeight={'bolder'}>برداشت های اخیر</Typography>
              <Typography color={'text.secondary'} fontSize={'smaller'}>لیست آخرین برداشت های رمزارز شما</Typography>
            </Box>
            <Stack direction={'row'} spacing={1}>
              <Button
                size={'small'}
                variant={'outlined'}
                color={'inherit'}>تاریخچه برداشت ها</Button>
              <Button
                size={'small'}
                variant={'outlined'}
                color={'inherit'}
                startIcon={<RefreshIcon />}
              >بروزرسانی</Button>
            </Stack>
          </Stack>
          <Divider sx={{mx: -1.5, my: 1.5}} />
          <Box sx={{mx: -1.5}}>
            <CkkLatestWithdrawalsTableType1 />
          </Box>
        </CkkContent>
      </Grid>
    </Grid>
  );
}