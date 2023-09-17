import CkkContent from "@/components/CkkContent/CkkContent";
import {Grid, Typography} from "@mui/material";

export default function TermsPage(){
  return (
    <Grid container>
      <Grid item xs={12}>
        <CkkContent>
          <Typography variant={'h5'}>قوانین و مقررات</Typography>
        </CkkContent>
      </Grid>
    </Grid>
  );
}