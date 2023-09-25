'use client';

import ListItemButton, {ListItemButtonProps} from "@mui/material/ListItemButton";
import Link from "next/link";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import {useMemo, useState} from "react";
import {MenuProps} from "@/features/MainSideBar/types";
import {Collapse, List} from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {usePathname} from 'next/navigation'
import {closeMainSideBar} from "@/features/MainSideBar/MainSideBarSlice";
import {useAppDispatch} from "@/tools/redux/hooks";
import { useRouter } from 'next/navigation'

const CustomListItemButton = (props: { href: string | undefined } & Omit<ListItemButtonProps, 'href'>) => {
  let editableProps = Object.assign({}, props);

  if (editableProps.href === undefined && editableProps.component) {
    delete editableProps['component'];
  }
  if (editableProps.href !== undefined && editableProps['onClick']) {
    delete editableProps['onClick'];
  }
  return <ListItemButton {...editableProps} />
}
export default function Menu(props: MenuProps) {
  const {
    href,
    icon,
    selectedIcon,
    submenus,
    text
  } = props;
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const selected = useMemo(() => {
    if(!href) return false;

    //Dashboard page
    if(href === '/' && pathname === href) return true;

    if(href !== '/' && pathname.startsWith(href)) return true;

    return false;
  }, [pathname])
  const handleClick = (href?: string) => {
    if(href){
      dispatch(closeMainSideBar())
      router.push(href);
    }
    setOpen(!open);
  };

  return (
    <ListItem selected={selected} disablePadding sx={{
      flexDirection: 'column',
      alignItems: 'inherit',
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px',
      '&.Mui-selected': {
        backgroundColor: 'info.main',
      },
    }}>
      <CustomListItemButton  onClick={() => handleClick(href)} sx={{
        '&:hover': {
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
        },
        transition: 'none'
      }}>
        {icon !== undefined && (
          <ListItemIcon sx={{
            minWidth: '32px'
          }}>
            {selected ? selectedIcon : icon}
          </ListItemIcon>
        )}
        <ListItemText primary={text}/>
        {href === undefined && (
          open ? <ExpandLess/> : <ExpandMore/>
        )}
      </CustomListItemButton>
      {
        href === undefined && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {submenus?.map((submenu, indx) => (
                <CustomListItemButton onClick={() => handleClick(submenu.href)} color={'info'} key={indx} sx={{pl: 4}}>
                  {submenu.icon !== undefined && (
                    <ListItemIcon>
                      {submenu.icon}
                    </ListItemIcon>
                  )}
                  <ListItemText primary={submenu.text}/>
                </CustomListItemButton>
              ))}
            </List>
          </Collapse>
        )
      }
    </ListItem>
  );
}