'use client';

import {Alert, AlertProps} from "@mui/material";
import {styled} from "@mui/material/styles";

const StyledAlert = styled(Alert)<AlertProps>(({theme}) => ({
  color: '#B2E368',
  backgroundColor: '#2E2E24',
  '& .MuiAlert-icon': {
    color: 'inherit'
  }
}))
export default function CkkWarningAlertType1(props: AlertProps){
  return (
    <StyledAlert {...props}>
      {props.children}
    </StyledAlert>
  );
}