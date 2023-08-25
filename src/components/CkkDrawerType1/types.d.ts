import {ReactNode} from "react";

export interface CkkDrawerType1Props {
  width: number;
  open: boolean;
  children?: ReactNode;
  variant: "permanent" | "temporary";
  onClose?: () => unknown;
}