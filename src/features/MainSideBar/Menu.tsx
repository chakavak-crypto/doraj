import ListItemButton, {ListItemButtonProps} from "@mui/material/ListItemButton";
import Link from "next/link";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import {MenuProps} from "@/features/MainSideBar/types";
import {useState} from "react";
import {Collapse, List} from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const CustomListItemButton = (props: {href: string | undefined} & Omit<ListItemButtonProps, 'href'>) => {
  let editableProps = Object.assign({}, props);

  if(editableProps.href === undefined && editableProps.component){
    delete editableProps['component'];
  }
  if(editableProps.href !== undefined && editableProps['onClick']){
    delete editableProps['onClick'];
  }
  return <ListItemButton {...editableProps} />
}
export default function Menu(props: MenuProps){
  const {
    href,
    icon,
    submenus,
    text
  } = props;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <ListItem disablePadding sx={{
      flexDirection: 'column',
      alignItems: 'inherit'
    }}>
      <CustomListItemButton component={Link} href={href} onClick={handleClick}>
        {icon !== undefined && (
          <ListItemIcon sx={{
            minWidth: '32px'
          }}>
            {icon}
          </ListItemIcon>
        )}
        <ListItemText primary={text} />
        {href === undefined && (
          open ? <ExpandLess /> : <ExpandMore />
        )}
      </CustomListItemButton>
      {
        href === undefined && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {submenus?.map((submenu, indx) => (
                <CustomListItemButton component={Link} href={submenu.href} key={indx} sx={{ pl: 4 }}>
                  {submenu.icon !== undefined && (
                    <ListItemIcon>
                      {submenu.icon}
                    </ListItemIcon>
                  )}
                  <ListItemText primary={submenu.text} />
                </CustomListItemButton>
              ))}
            </List>
          </Collapse>
        )
      }
    </ListItem>
  );
}