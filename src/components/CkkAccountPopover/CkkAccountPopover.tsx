import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {Avatar, Box, Divider, Paper, Stack} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import CkkAvatarWithBadge from "../CkkAvatarWithBadge";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

function BasicList() {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <Divider variant="middle"/>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider variant="middle" />
            <nav aria-label="secondary mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
}

export default function CkkAccountPopover() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'ckk-account-popover' : undefined;

    return (
        <div>
            <Button
                aria-describedby={id}
                variant="contained"
                startIcon={<CkkAvatarWithBadge />}
                endIcon={<ExpandMoreIcon />}
                onClick={handleClick}>
                Open Popover
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Paper>
                    <Stack spacing={2}>
                        <Button
                            aria-describedby={id}
                            sx={{
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            variant="contained"
                            disableRipple
                            disableElevation
                            disableFocusRipple
                            onClick={handleClose}
                            startIcon={<CkkAvatarWithBadge />}
                            endIcon={<ExpandLessIcon />}>
                            U4387123
                        </Button>
                        <Box>
                            <BasicList />
                        </Box>
                    </Stack>
                </Paper>
            </Popover>
        </div>
    );
}