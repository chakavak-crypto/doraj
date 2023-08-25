import * as React from 'react';
import {ReactNode} from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import {Box, Paper, Stack, useTheme} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import TuneIcon from '@mui/icons-material/Tune';
import CkkSimpleSwitch from "../CkkSimpleSwitch";

export default function CkkThemeOptionsPopper(props: {
  themeSwitch?: ReactNode
}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const theme = useTheme();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl === null) {
      setAnchorEl(event.currentTarget);
    } else {
      handleClose()
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'ckk-theme-options-popover' : undefined;

  return (
    <div>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <TuneIcon/>
      </IconButton>
      <Popover
        id={id}
        open={open}
        sx={{mt: 2}}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        PaperProps={{
          style: {

            overflow: "visible"
          }
        }}
      >
        <Paper variant="outlined" sx={{p: 5}}>
          <Box
            sx={{
              position: "relative",
              mt: "0px",
              zIndex: -1,
              "&::before": {
                backgroundColor: "rgba(0, 0, 0, 0.12)",
                content: '""',
                display: "block",
                position: "absolute",
                width: 12,
                height: 12,
                top: "-17px",
                transform: "rotate(45deg)",
                left: "-1px",
              }
            }}
          />
          <Stack spacing={5}>
            {props.themeSwitch !== undefined && (
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography color={theme.palette.secondary.contrastText} display={'flex'} alignSelf={'center'} mr={5}>حالت
                  نمایش</Typography>
                {props.themeSwitch}
              </Stack>
            )}
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography color={theme.palette.secondary.contrastText} display={'flex'} alignSelf={'center'} mr={2}>عدد
                فارسی</Typography>
              <CkkSimpleSwitch size={'small'}/>
            </Stack>
          </Stack>
        </Paper>
      </Popover>
    </div>
  );
}