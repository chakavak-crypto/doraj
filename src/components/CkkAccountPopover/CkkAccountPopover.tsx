import * as React from 'react';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Box, Divider, Select, SelectProps} from "@mui/material";
import CkkAvatarWithBadge from "../CkkAvatarWithBadge";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {styled} from "@mui/system";
import LogoutIcon from '@mui/icons-material/Logout';
import SecurityIcon from '@mui/icons-material/Security';
import PersonIcon from '@mui/icons-material/Person';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import {useAppDispatch} from "@/tools/redux/hooks";
import {useTranslation} from "@/app/i18n/client";
import {openLogoutModal} from "@/features/LogoutModal/LogoutModalSlice";

const StyledSelect = styled<SelectProps>(Select)(({theme}) => ({
  minWidth: '150px',
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.action.focus,
  },
  '& .MuiSelect-select[aria-expanded="true"]~fieldset': {
    borderColor: theme.palette.action.active,
    borderBottom: 'none',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
}))

function BasicList() {
  const dispatch = useAppDispatch();
  const [t] = useTranslation();
  const handleOpen = () => dispatch(openLogoutModal());
  return (
    <>
      <Divider sx={{
        mb: 2,
        pt: 2,
        borderBottomWidth: '2px'
      }} variant="middle" component="li"/>
      <ListItem disablePadding>
        <ListItemButton sx={{py: 0.5}}>
          <ListItemIcon sx={{minWidth: '28px!important'}}>
            <WarningAmberIcon sx={{width: '17px', height: '17px'}}/>
          </ListItemIcon>
          <ListItemText primary="سطح ۱"/>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{py: 0.5}}>
          <ListItemIcon sx={{minWidth: '28px!important'}}>
            <PersonIcon sx={{width: '17px', height: '17px'}}/>
          </ListItemIcon>
          <ListItemText primary="حساب کاربری"/>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{py: 0.5}}>
          <ListItemIcon sx={{minWidth: '28px!important'}}>
            <SecurityIcon sx={{width: '17px', height: '17px'}}/>
          </ListItemIcon>
          <ListItemText primary="امنیت"/>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{py: 0.5}}>
          <ListItemIcon sx={{minWidth: '28px!important'}}>
            <DraftsIcon sx={{width: '17px', height: '17px'}}/>
          </ListItemIcon>
          <ListItemText primary="پیام ها"/>
        </ListItemButton>
      </ListItem>
      <Divider variant="middle" component="li"/>
      <ListItem disablePadding>
        <ListItemButton onClick={handleOpen} sx={{py: 0.5}}>
          <ListItemIcon sx={{minWidth: '28px!important'}}>
            <LogoutIcon sx={{width: '17px', height: '17px'}}/>
          </ListItemIcon>
          <ListItemText primary="خروج"/>
        </ListItemButton>
      </ListItem>
    </>
  );
}

export default function CkkAccountPopover() {
  const [open, setOpen] = React.useState(false);
  const handleClick = (event: any) => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledSelect
        size={'small'}
        open={open}
        onClick={handleClick}
        onClose={handleClose}
        displayEmpty
        IconComponent={ExpandMoreIcon}
        MenuProps={{
          sx: {
            zIndex: '2500',
            '& .MuiPaper-root': {
              borderStyle: 'solid',
              borderColor: (theme) => theme.palette.action.active,
              borderTop: 'none',
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderWidth: '2px',
            },
            '& .MuiList-root': {
              bgcolor: 'background.paper',
              paddingBottom: 0,
              paddingTop: 0,

            }
          },
          transitionDuration: 20
        }}
        renderValue={() => (
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <CkkAvatarWithBadge/>
            <Typography fontFamily={'var(--roboto)'} align={'right'} sx={{width: '70px', direction: 'rtl'}}
                        fontSize={'smaller'} noWrap
                        component={'div'}>U34f2133asdfasdfsfasdf</Typography>
          </Box>
        )}
      >
        <BasicList/>
      </StyledSelect>
    </div>
  );
}