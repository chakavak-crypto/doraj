'use client'

import {Card, CardProps} from "@mui/material";
import {styled} from "@mui/system";
export interface CkkCardType3Props extends CardProps{}
const StyledCard = styled<CkkCardType3Props>(Card)(({theme}) => {
  let backgroundImage = theme.palette.mode === 'dark' ?
    `linear-gradient(45deg, ${theme.palette.background.default}, rgba(255, 255, 255, 0.12))`
    : 'none';
  return {
    maxWidth: 400,
    minWidth: 300,
    boxShadow: 'none',
    borderWidth: '1px',
    borderColor: theme.palette.divider,
    borderStyle: 'solid',
    borderRadius: '16px',
    backgroundImage: backgroundImage
  };
});
export default function CkkCardType3(props: CardProps){
  return (
    <StyledCard
      {...props}
    >{props.children}</StyledCard>
  );
}