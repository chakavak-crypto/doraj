import {Card, CardContent, CardProps, Grid, Link, Typography} from "@mui/material";
import * as React from "react";
import {default as NextLink} from 'next/link';

export default function FooterCard(props: CardProps) {
  return (
    <Card
      component="footer"
      sx={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        borderRadius: '0',
        borderTopColor: 'divider',
        borderTopWidth: '1px',
        borderTopStyle: 'solid'
      }}
      {...props}
    >
      <CardContent sx={{pt: '8px!important', pb: '4px!important'}}>
        <Grid container spacing={2} sx={{flexDirection: {xs: 'column-reverse', sm: 'row'}}}>
          <Grid item flexGrow={1} sx={{textAlign: {xs: 'center', sm: 'left'}}}>

            <Typography>&copy; تمامی حقوق برای رابسانا محفوظ است</Typography>
          </Grid>
          <Grid item sx={{minWidth: '300px'}}>
            <Grid container sx={{justifyContent: {xs: 'space-around', sm: 'space-between'}}}>
              <Grid item>
                <Link component={NextLink} color={'text.secondary'} underline={'none'} href={'/contact'}>تماس با ما</Link>
              </Grid>
              <Grid item>
                <Link component={NextLink} color={'text.secondary'} underline={'none'} href={'/terms'}>شرایط خدمات</Link>
              </Grid>
              <Grid item>
                <Link component={NextLink} color={'text.secondary'} underline={'none'} href={'/privacy'}>حریم خصوصی</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}