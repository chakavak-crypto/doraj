import * as React from 'react';
import {styled} from '@mui/material/styles';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import {grey} from "@mui/material/colors";

const CkkFilledIconButton = styled(IconButton)<IconButtonProps>(({ theme, color }) => {
    if(color === 'default' || color === undefined || color === 'inherit') return {};

    return {
        color: grey['50'],
        backgroundColor: theme.palette[color].light,
        '&:hover': {
            backgroundColor: theme.palette[color].dark,
        },
    };
});

export default CkkFilledIconButton;