import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "next/link";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import {useAppDispatch} from "@/tools/redux/hooks";
import {closeMainSideBar} from "@/features/MainSideBar/MainSideBarSlice";


const DRAWER_WIDTH = 240;

const LINKS = [
  { text: 'داشبورد', href: '/', icon: HomeIcon },
  { text: 'ثبت سفارش', href: '/starred', icon: StarIcon },
  { text: 'کیف پول', href: '/tasks', icon: ChecklistIcon },
  { text: 'تاریخچه سفارش ها', href: '/tasks1', icon: ChecklistIcon },
  { text: 'حساب کاربری', href: '/tasks2', icon: ChecklistIcon },
  { text: 'امنیت', href: '/tasks3', icon: ChecklistIcon },
  { text: 'پشتیبانی', href: '/tasks4', icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS = [
  { text: 'Settings', icon: SettingsIcon },
  { text: 'Support', icon: SupportIcon },
  { text: 'Logout', icon: LogoutIcon },
];


export default function Menus(){
  const dispatch = useAppDispatch();

  const handleDrawerClose = () => {
    dispatch(closeMainSideBar())
  };
  return (
    <>
      <IconButton onClick={handleDrawerClose}><CloseIcon /></IconButton>
      <List>
        {LINKS.map(({ text, href, icon: Icon }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton component={Link} href={href}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ mt: 'auto' }} />
      <List>
        {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}