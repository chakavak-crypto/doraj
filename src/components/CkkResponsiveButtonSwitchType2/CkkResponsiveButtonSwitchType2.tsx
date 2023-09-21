import {Button, ButtonGroup, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

export interface CkkResponsiveButtonSwitchType2Props{
  label1: string;
  label2: string;
  label3: string;
  value1: string;
  value2: string;
  value3: string;
  value: string;
  onChange?: (newVal) => unknown;
}
export default function CkkResponsiveButtonSwitchType2(props: CkkResponsiveButtonSwitchType2Props){
  const {
    label1,
    label2,
    label3,
    value1,
    value2,
    value3,
    value,
    onChange
  } = props;

  const handleChange = (event: SelectChangeEvent | string) => {
    if(onChange){
      if(typeof event === 'string'){
       onChange(event)
      }else{
        onChange(event.target.value)
      }
    }
  };

  return (
    <>
      <Stack direction={'row'} spacing={1} sx={{display: {xs: 'none', lg: 'flex'}}}>
        <ButtonGroup variant="outlined">
          <Button onClick={() => handleChange(value1)}
                  variant={value === value1 ? 'contained' : 'outlined'}
          >{label1}</Button>
          <Button onClick={() => handleChange(value2)}
                  variant={value === value2 ? 'contained' : 'outlined'}
          >{label2}</Button>
          <Button onClick={() => handleChange(value3)}
                  variant={value === value3 ? 'contained' : 'outlined'}
          >{label3}</Button>
        </ButtonGroup>
      </Stack>
      <Box sx={{display: {xs: 'flex', lg: 'none'}}}>
        <FormControl size="small">
          <Select
            value={value}
            onChange={handleChange}
          >
            <MenuItem value={value1}>{label1}</MenuItem>
            <MenuItem value={value2}>{label2}</MenuItem>
            <MenuItem value={value3}>{label3}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}