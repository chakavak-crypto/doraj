import {Breadcrumbs, BreadcrumbsProps} from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export interface CkkBreadcrumbsType1Props extends BreadcrumbsProps {
}

export default function CkkBreadcrumbsType1(props: CkkBreadcrumbsType1Props) {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      maxItems={3}
      separator={<NavigateBeforeIcon fontSize="small"/>}
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