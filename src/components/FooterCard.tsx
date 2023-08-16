import {Card, CardContent, Grid} from "@mui/material";
import * as React from "react";

export default function FooterCard(){
  return (
    <Card
      component="footer"
      sx={{
        position: 'fixed', bottom: 0, left: 0, right: 0
      }}
    >
      <CardContent>
        <Grid container spacing={2} sx={{display: {xs: 'flex-reverse'}}}>
          <Grid item flexGrow={1}>تمامی حقوق برای رابسانا محفوظ است</Grid>
          <Grid item>تماس با ما</Grid>
          <Grid item>شرایط خدمات</Grid>
          <Grid item>حریم خصوصی</Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}