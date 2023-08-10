import {Box, Button, Divider} from "@mui/material";
import {ButtonProps} from "@mui/material";
export default function CkkButtonType1(props: ButtonProps){
    return (
        <Button
            sx={{

            }}
            variant={'contained'}
            startIcon={<img src={'https://placehold.co/15'} />}
            {...props}
        >
            <Box component={'span'}>BTC</Box>
            <Divider
                sx={{mx: 2, my: 1}}
                orientation={'vertical'} flexItem/>
            <Box component={'span'}>Bitcoin</Box>
        </Button>
    );
}