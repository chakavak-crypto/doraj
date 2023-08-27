import {ReactNode} from "react";
import {Paper, PaperProps} from "@mui/material";
import {styled} from "@mui/system";
import {Style} from "util";

export interface CkkContentProps extends PaperProps{
  children: ReactNode
}

const styles = {
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: 'divider',
  height: '100%',
  bgcolor: 'background.paper',
  boxShadow: 'none',
  py: 1,
  px: 1.5,
  overflowY: 'scroll',
  backgroundImage: 'none',
}
export default function CkkContent(props: CkkContentProps){
  return (
    <Paper
      sx={styles}
      {...props}
    >
      {props.children}
    </Paper>
  );
}