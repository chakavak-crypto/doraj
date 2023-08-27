import Link from "next/link";
import {Breadcrumbs, BreadcrumbsProps, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export interface CkkBreadcrumbsType1Props extends BreadcrumbsProps{}
export default function CkkBreadcrumbsType1(props: CkkBreadcrumbsType1Props){
 return (
   <Breadcrumbs
     aria-label="breadcrumb"
     maxItems={3}
     separator={<NavigateBeforeIcon fontSize="small" />}
     sx={{
       display: 'flex',
       alignItems: 'center'
     }}
     {...props}
   >
     {props.children}
   </Breadcrumbs>
 );
}