import {Fab} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
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
import {MenuProps} from "@/features/MainSideBar/types";
import Menu from "@/features/MainSideBar/Menu";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {openLogoutModal} from "@/features/LogoutModal/LogoutModalSlice";

const DRAWER_WIDTH = 240;

const LINKS: MenuProps[] = [
  {text: 'داشبورد', href: '/', icon: <HomeIcon/>, selected: true},
  {text: 'ثبت سفارش', href: '/starred', icon: <StarIcon/>},
  {text: 'کیف پول', href: '/tasks', icon: <ChecklistIcon/>},
  {text: 'تاریخچه سفارش ها', href: '/tasks1', icon: <ChecklistIcon/>},
  {
    text: 'حساب کاربری', icon: <ChecklistIcon/>, submenus: [
      {
        text: 'احراز هویت',
        href: '/foo',
        icon: <ChecklistIcon/>
      }
    ]
  },
  {text: 'امنیت', href: '/tasks3', icon: <ChecklistIcon/>},
  {text: 'پشتیبانی', href: '/tasks4', icon: <ChecklistIcon/>},
];

const PLACEHOLDER_LINKS = [
  {text: 'Settings', icon: SettingsIcon},
  {text: 'Support', icon: SupportIcon},
  {text: 'Logout', icon: LogoutIcon},
];


export default function Menus() {
  const dispatch = useAppDispatch();
  return (
    <>
      <List>
        {LINKS.map(({text, href, icon, submenus, selected}, indx) => (
          <Menu key={indx} href={href} text={text} icon={icon} submenus={submenus} selected={selected}/>
        ))}
      </List>
      <List sx={{mt: 'auto'}}>
        <ListItem sx={{display: {xs: 'none', md: 'flex'}}} key={'close-sidebar'} disablePadding>
          <ListItemButton sx={{
            '&:hover': {
              background: 'inherit'
            }
          }}>
            <ListItemIcon>
              <Fab disableRipple sx={{
                width: '32px',
                height: '32px',
                minHeight: '32px',
                boxShadow: 'none',
                border: '1.5px solid grey',
                background: 'transparent',
                color: 'inherit',
                '&:hover': {
                  background: 'transparent',
                }
              }} size={'small'}><KeyboardArrowRightIcon/></Fab>
            </ListItemIcon>
            <ListItemText primary={'بستن سایدبار'}/>
          </ListItemButton>
        </ListItem>
        <Divider variant="inset" component="li" sx={{margin: 0}}/>
        <ListItem
          key={'exit'}
          disablePadding>
          <ListItemButton
            onClick={() => dispatch(openLogoutModal())}
            sx={{
              '&:hover': {
                background: 'inherit'
              }
            }}>
            <ListItemIcon>
              <LogoutIcon/>
            </ListItemIcon>
            <ListItemText primary={'خروج'}/>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}