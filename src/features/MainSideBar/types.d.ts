import {ReactNode} from "react";

export interface MainSideBarProps{
  width: number;
  open: boolean
}
export interface MenuProps{
  icon?: ReactNode | undefined;
  text: string;
  selected?: boolean | undefined;
  href?: string | undefined;
  submenus?: MenuProps[] | undefined
}