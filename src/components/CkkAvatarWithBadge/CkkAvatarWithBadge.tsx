import * as React from 'react';
import {styled} from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import DiamondIcon from '@mui/icons-material/Diamond';
import {CircularProgress} from "@mui/material";
import {green} from "@mui/material/colors";

const SmallAvatar = styled(Avatar)(({theme}) => ({
  width: 16,
  height: 16,
  border: `2px solid ${theme.palette.background.paper}`,
  backgroundColor: 'white',
  color: theme.palette.info.main
}));

export default function CkkAvatarWithBadge() {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      badgeContent={
        <SmallAvatar>
          <DiamondIcon sx={{fontSize: '13px'}}/>
        </SmallAvatar>
      }
    >
      <Avatar sx={{width: 25, height: 25}} alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg"/>
      <CircularProgress
        thickness={2}
        size={30}
        value={100}
        variant="determinate"
        sx={{
          color: green[500],
          position: 'absolute',
          top: -3,
          left: -2.5,
          zIndex: 1,
        }}
      />
    </Badge>
  );
}