import {ReactNode} from "react";
import {Paper, PaperProps} from "@mui/material";

export interface CkkContentProps extends PaperProps {
  children: ReactNode
}

const styles = {
  borderStyle: 'solid',
  borderWidth: [0, '2px'],
  borderColor: 'divider',
  height: '100%',
  bgcolor: 'background.paper',
  boxShadow: 'none',
  py: 1,
  px: [0.25, 1.5],
  overflowY: 'scroll',
  borderRadius: [0, '8px'],
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
}
export default function CkkContent(props: CkkContentProps) {
  return (
    <Paper
      sx={styles}
      {...props}
    >
      {props.children}
    </Paper>
  );
}