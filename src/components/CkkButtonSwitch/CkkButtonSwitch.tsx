import {Box, Button, Stack} from "@mui/material";

export default function CkkButtonSwitch(props: {
  value: 0 | 1,
  firstTitle: string,
  secondTitle: string,
  onChange?: (newVal) => unknown }){
  const {
    value,
    firstTitle,
    secondTitle,
    onChange
  } = props;

  const handleChange = (newVal: 0 | 1) => {
    if(onChange){
      onChange(newVal);
    }
  }
  return (
    <Stack
      direction={'row'}
      spacing={2}
    >
      <Box sx={{width: '50%'}}>
        <Button
          size={'small'}
          fullWidth
          variant={value === 0 ? 'contained' : 'text'}
          onClick={() => handleChange(0)}
        >{firstTitle}</Button>
      </Box>
      <Box sx={{width: '50%'}}>
        <Button
          fullWidth
          size={'small'}
          variant={value === 1 ? 'contained' : 'text'}
          onClick={() => handleChange(1)}
        >{secondTitle}</Button>
      </Box>
    </Stack>
  );
}