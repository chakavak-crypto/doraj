import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import SendTicketImg from '@/assets/send-ticket.png';

export interface CkkCardType1Props {
  icon: string;
  button: string
}

export default function CkkCardType1() {
  return (
    <Card sx={{display: 'flex', flex: '0 1 auto'}}>
      <CardMedia
        component="img"
        sx={{
          width: 80,
          paddingTop: 12
        }}
        image={SendTicketImg}
      />
      <Box sx={{display: 'flex', flexDirection: 'row', flexGrow: 1}}>
        <CardContent sx={{py: '0px!important', flex: '1 0 auto', my: 'auto'}}>
          <Button
            sx={{
              px: 10
            }}
            variant={'contained'}
            endIcon={<DeleteIcon/>}
            fullWidth
          >Foo bar</Button>
        </CardContent>
      </Box>
    </Card>
  );
}