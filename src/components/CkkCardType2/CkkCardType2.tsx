import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import {Grid, Stack} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import CkkFilledIconButton from "../CkkFilledIconButton";
import Typography from "@mui/material/Typography";

export default function CkkCardType2(){
    return (
        <Box sx={{ minWidth: 185 }}>
            <Card>
                <CardContent>
                    <Stack spacing={5}>
                        <Stack direction={'row'} spacing={5} justifyContent={'space-between'}>
                            <Stack direction={'row'} spacing={8}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <img src={"https://placehold.co/25"}/>
                                </Box>
                                <Box>
                                    <Box>Bitcoin</Box>
                                    <Typography fontSize={'smaller'} color="text.secondary">BTC</Typography>
                                </Box>
                            </Stack>
                            <Box>+0.23%</Box>
                        </Stack>
                        <Stack direction={'row'} spacing={5} justifyContent={'space-between'}>
                            <Typography fontWeight={'bold'}>2,145,270,000 ریال</Typography>
                            <Box>
                                <CkkFilledIconButton
                                    size={'small'}
                                    color={'info'}><SwapHorizIcon /></CkkFilledIconButton>
                            </Box>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}