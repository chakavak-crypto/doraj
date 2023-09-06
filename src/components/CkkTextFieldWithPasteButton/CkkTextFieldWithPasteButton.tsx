import {Button, InputAdornment, TextField, TextFieldProps} from "@mui/material";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

export default function CkkTextFieldWithPasteButton(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button
              sx={{
                padding: '6px 2px',
                minWidth: '30px',
              }}
              variant={'contained'}
              size={'small'}
              color={'info'}
            ><ContentPasteIcon sx={{fontSize: '18px'}}/></Button>
          </InputAdornment>
        ),
      }}
    />
  );
}