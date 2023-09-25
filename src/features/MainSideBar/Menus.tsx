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
import LogoutIcon from "@mui/icons-material/Logout";
import {useAppDispatch} from "@/tools/redux/hooks";
import {MenuProps} from "@/features/MainSideBar/types";
import Menu from "@/features/MainSideBar/Menu";
import {openLogoutModal} from "@/features/LogoutModal/LogoutModalSlice";
import GridViewIcon from '@mui/icons-material/GridView';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
const LINKS: MenuProps[] = [
  {text: 'داشبورد', href: '/', icon: <GridViewIcon/>, selectedIcon: <GridViewSharpIcon/>},
  {text: 'ثبت سفارش', href: '/order', icon: <FactCheckOutlinedIcon/>, selectedIcon: <FactCheckIcon/>},
  {text: 'کیف پول', href: '/wallet', icon: <AccountBalanceWalletOutlinedIcon/>, selectedIcon: <AccountBalanceWalletIcon/>},
  {text: 'تاریخچه سفارش ها', href: '/orders', icon: <AssignmentOutlinedIcon/>, selectedIcon: <AssignmentIcon/>},
  {
    text: 'حساب کاربری', icon: <PersonOutlineOutlinedIcon/>, selectedIcon: <PersonIcon/>, submenus: [
      {
        text: 'احراز هویت',
        href: '/kyc',
        icon: <LocalPoliceOutlinedIcon/>,
        selectedIcon: <LocalPoliceIcon/>
      }
    ]
  },
  {text: 'امنیت', href: '/tasks3', icon: <LocalPoliceOutlinedIcon/>, selectedIcon: <LocalPoliceIcon/>},
  {text: 'پشتیبانی', href: '/tasks4', icon: <SupportAgentOutlinedIcon/>, selectedIcon: <SupportAgentOutlinedIcon/>},
];


export default function Menus() {
  const dispatch = useAppDispatch();
  return (
    <>
      <List sx={{pr: 1}}>
        {LINKS.map(({text, href, icon, selectedIcon, submenus, selected}, indx) => (
          <Menu key={indx} href={href} text={text} icon={icon} selectedIcon={selectedIcon} submenus={submenus} selected={selected}/>
        ))}
      </List>
      <List sx={{mt: 'auto'}}>
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