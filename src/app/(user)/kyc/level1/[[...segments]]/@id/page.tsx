import {Box, Button, Grid, Stack, TextField, Typography} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CkkChipType3 from "@/components/CkkChipType3";
import CkkStepperType1 from "@/components/CkkStepperType1";

export default function EmailPage(){
  return (
    <Stack spacing={2}>
      <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Typography>
      <Box>
        <Typography>نام</Typography>
        <TextField
          size={'small'}
          sx={{
            minWidth: 250
          }}
        />
      </Box>
      <Box>
        <Typography>نام خانوادگی</Typography>
        <TextField
          size={'small'}
          sx={{
            minWidth: 250
          }}
        />
      </Box>
      <Box>
        <Typography>کد ملی</Typography>
        <TextField
          size={'small'}
          sx={{
            minWidth: 250
          }}
        />
      </Box>
      <Box>
        <Typography>نام پدر</Typography>
        <TextField
          size={'small'}
          sx={{
            minWidth: 250
          }}
        />
      </Box>
      <Box>
        <Typography>تاریخ تولد</Typography>
        <TextField
          size={'small'}
          sx={{
            minWidth: 250
          }}
        />
      </Box>
      <Box>
        <Typography>تصویر کارت ملی</Typography>
        <TextField
          size={'small'}
          sx={{
            minWidth: 250
          }}
        />
      </Box>
      <Box maxWidth={250}>
        <Button fullWidth color={'primary'} size={'large'} variant={'contained'}>ارسال</Button>
      </Box>
    </Stack>
  );
}