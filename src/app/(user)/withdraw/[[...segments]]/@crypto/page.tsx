import * as React from 'react';
import CkkContent from "@/components/CkkContent/CkkContent";
import {Avatar, Card, CardContent, CardHeader, Grid, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import WarningIcon from '@mui/icons-material/Warning';
import CryptoWithdrawalCard from "@/features/CryptoWithdrawalCard";

export default function WalletPage(){

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
          latest withdrawals
        </CkkContent>
      </Grid>
    </Grid>
  );
}