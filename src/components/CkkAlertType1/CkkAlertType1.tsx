'use client';

import {Alert, AlertProps, Collapse} from "@mui/material";
import {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export interface CkkAlertType1Props extends AlertProps{}
export default function CkkAlertType1(props: CkkAlertType1Props){
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        {...props}
      >{props.children}</Alert>
    </Collapse>
  );
}