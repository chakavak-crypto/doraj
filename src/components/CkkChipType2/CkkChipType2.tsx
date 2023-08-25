import Chip, {ChipProps} from "@mui/material/Chip";
import {styled} from "@mui/material/styles";
import {alpha} from "@mui/material";

const StyledChip = styled((props: CkkChipType2Props) => (
  <Chip {...props as ChipProps} />
))(({theme, color}) => {
  let customStyles = {
    borderRadius: '10px',
    backgroundColor: '',
    color: ''
  };

  if (!color) return customStyles;

  if (color === undefined || color === 'default') return customStyles;

  if (theme.palette.mode === 'light') {
    customStyles['backgroundColor'] = alpha(theme.palette[color].main, 0.7)
    customStyles['color'] = theme.palette.grey['50']
  } else {
    customStyles['backgroundColor'] = alpha(theme.palette[color].main, 0.2)
    customStyles['color'] = theme.palette[color].main
  }

  return customStyles;
})

interface CkkChipType2Props extends ChipProps {
}

export default function CkkChipType2(props: CkkChipType2Props) {
  return (
    <StyledChip
      {...props}
    />
  );
}