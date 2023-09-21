import {Button, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

export interface CkkResponsiveButtonSwitchType1Props{
  label1: string;
  label2: string;
  value1: string;
  value2: string;
  value: string;
  onChange?: (newVal) => unknown;
}
export default function CkkResponsiveButtonSwitchType1(props: CkkResponsiveButtonSwitchType1Props){
  const {
    label1,
    label2,
    value1,
    value2,
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
      <Stack direction={'row'} spacing={1} sx={{display: {xs: 'none', sm: 'flex'}}}>
        <Button onClick={() => handleChange(value1)} variant={value === value1 ? 'contained' : 'text'} color={'secondary'}>{label1}</Button>
        <Button onClick={() => handleChange(value2)} variant={value === value2 ? 'contained' : 'text'} color={'secondary'}>{label2}</Button>
      </Stack>
      <Box sx={{display: {xs: 'flex', sm: 'none'}}}>
        <FormControl size="small">
          <Select
            value={value}
            onChange={handleChange}
          >
            <MenuItem value={value1}>{label1}</MenuItem>
            <MenuItem value={value2}>{label2}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}