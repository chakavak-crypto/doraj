import {LinearProgress, linearProgressClasses, LinearProgressProps} from "@mui/material";
import {styled} from "@mui/material/styles";

const StyledLinearProgress = styled(LinearProgress)<LinearProgressProps>(({theme}) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}))
export default function CkkRoundedLinearProgress(props: LinearProgressProps){
  return (
    <StyledLinearProgress {...props} />
  );
}