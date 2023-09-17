import {Grid, LinearProgress, Typography} from "@mui/material";

export interface StrengthMeterProps{
  value: string;
}
const getColor = (value?: string | null, condition: boolean) => {
  if(value === undefined || value === '' || value === null) return 'secondary';

  if(condition) return 'success';

  return 'error';

}
export default function StrengthMeter(props: StrengthMeterProps){
  const {value} = props;
  return (
    <Grid container spacing={1} justifyContent={'space-between'}>
      <Grid item xs={4}>
        <LinearProgress
          sx={{
            '& .MuiLinearProgress-bar':{
              borderRadius: 8
            }
          }}
          color={getColor(value, value.length >= 8)} value={100} variant="determinate" />
        <Typography color={getColor(value, value.length >= 8)}  textAlign={'center'} fontSize={'small'}>۸ کاراکتر</Typography>
      </Grid>
      <Grid item xs={4}>
        <LinearProgress
          sx={{
            '& .MuiLinearProgress-bar':{
              borderRadius: 8
            }
          }}
          color={getColor(value, Boolean(value?.match(/[A-Z]/)))}
          value={100} variant="determinate" />
        <Typography color={getColor(value, Boolean(value?.match(/[A-Z]/)))} textAlign={'center'} fontSize={'small'}>۱ حرف بزرگ</Typography>
      </Grid>
      <Grid item xs={4}>
        <LinearProgress
          sx={{
            '& .MuiLinearProgress-bar':{
              borderRadius: 8
            }
          }}
          color={getColor(value, Boolean(value?.match(/[0-9]/)))}
          value={100} variant="determinate" />
        <Typography color={getColor(value, Boolean(value?.match(/[0-9]/)))} textAlign={'center'} fontSize={'small'}>۱ عدد</Typography>
      </Grid>
    </Grid>
  );
}