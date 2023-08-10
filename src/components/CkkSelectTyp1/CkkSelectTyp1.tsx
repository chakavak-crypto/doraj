import * as React from 'react';
import {
    Box,
    Button,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText,
    Stack,
    Typography
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import CkkButtonType1 from "../CkkButtonType1";
import InboxIcon from '@mui/icons-material/Inbox';

export default function CkkSelectTyp1(){
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <Button
                variant={'contained'}
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                startIcon={<img src={'https://placehold.co/25'} />}
            >
                <Box component={'span'}>Foo</Box>
                <Divider
                    sx={{
                        mx: 2
                    }}
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    color={'inherit'} />
                <Box component={'span'} sx={{pr: 8}}>Bar</Box>
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
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
                <MenuItem
                    disableRipple
                    sx={{
                        justifyContent: 'space-between',
                        '&:hover': {
                            backgroundColor: 'inherit',
                            cursor: 'auto'
                        },
                    }}
                    component={'div'}
                >
                    <div>foo</div>
                    <IconButton size={'small'} onClick={handleClose} aria-label="delete">
                        <KeyboardArrowUpIcon />
                    </IconButton>
                </MenuItem>
                <MenuItem
                    sx={{
                        '&:hover': {
                            backgroundColor: 'inherit',
                            cursor: 'auto'
                        },
                    }}
                    disableRipple
                    divider
                    component={'div'}>
                    <TextField
                        size={'small'}
                        variant="outlined"
                        placeholder={'Search'}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </MenuItem>
                <MenuItem
                    disableRipple
                    divider
                    sx={{
                        flexDirection: 'column',
                        alignItems: 'start',
                        '&:hover': {
                            backgroundColor: 'inherit',
                            cursor: 'auto'
                        },
                    }}
                >
                    <Box sx={{mb: 3}}>Latest filters</Box>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <CkkButtonType1 size={'small'}>Item1</CkkButtonType1>
                        </Grid>
                        <Grid item xs={6}>
                            <CkkButtonType1 size={'small'}>Item2</CkkButtonType1>
                        </Grid>
                        <Grid item xs={6}>
                            <CkkButtonType1 size={'small'}>Item3</CkkButtonType1>
                        </Grid>
                    </Grid>
                </MenuItem>
                <MenuItem
                    disableRipple
                    component={'div'}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'inherit',
                            cursor: 'auto'
                        },
                    }}
                >
                    <List dense sx={{
                        width: '100%',
                        maxHeight: '200px',
                        position: 'relative',
                        overflow: 'auto',
                    }}>
                        <ListItemButton  divider onClick={handleClose} sx={{justifyContent: 'space-between'}}>
                            <Stack direction={'row'} spacing={4} sx={{alignSelf: 'flex-end'}}>
                                <Box><img src={'https://placehold.co/25'} /></Box>
                                <Stack direction={'row'} spacing={2}>
                                    <Typography>Foo</Typography>
                                    <Divider orientation={'vertical'} sx={{height: '60%'}}/>
                                    <Typography>Bar</Typography>
                                </Stack>
                            </Stack>
                            <Typography>30,000,431,000</Typography>
                        </ListItemButton>
                        <ListItemButton  divider onClick={handleClose} sx={{justifyContent: 'space-between'}}>
                            <Stack direction={'row'} spacing={4} sx={{alignSelf: 'flex-end'}}>
                                <Box><img src={'https://placehold.co/25'} /></Box>
                                <Stack direction={'row'} spacing={2}>
                                    <Typography>Foo</Typography>
                                    <Divider orientation={'vertical'} sx={{height: '60%'}}/>
                                    <Typography>Bar</Typography>
                                </Stack>
                            </Stack>
                            <Typography>30,000,431,000</Typography>
                        </ListItemButton>
                        <ListItemButton  divider onClick={handleClose} sx={{justifyContent: 'space-between'}}>
                            <Stack direction={'row'} spacing={4} sx={{alignSelf: 'flex-end'}}>
                                <Box><img src={'https://placehold.co/25'} /></Box>
                                <Stack direction={'row'} spacing={2}>
                                    <Typography>Foo</Typography>
                                    <Divider orientation={'vertical'} sx={{height: '60%'}}/>
                                    <Typography>Bar</Typography>
                                </Stack>
                            </Stack>
                            <Typography>30,000,431,000</Typography>
                        </ListItemButton>
                        <ListItemButton  divider onClick={handleClose} sx={{justifyContent: 'space-between'}}>
                            <Stack direction={'row'} spacing={4} sx={{alignSelf: 'flex-end'}}>
                                <Box><img src={'https://placehold.co/25'} /></Box>
                                <Stack direction={'row'} spacing={2}>
                                    <Typography>Foo</Typography>
                                    <Divider orientation={'vertical'} sx={{height: '60%'}}/>
                                    <Typography>Bar</Typography>
                                </Stack>
                            </Stack>
                            <Typography>30,000,431,000</Typography>
                        </ListItemButton>
                        <ListItemButton  divider onClick={handleClose} sx={{justifyContent: 'space-between'}}>
                            <Stack direction={'row'} spacing={4} sx={{alignSelf: 'flex-end'}}>
                                <Box><img src={'https://placehold.co/25'} /></Box>
                                <Stack direction={'row'} spacing={2}>
                                    <Typography>Foo</Typography>
                                    <Divider orientation={'vertical'} sx={{height: '60%'}}/>
                                    <Typography>Bar</Typography>
                                </Stack>
                            </Stack>
                            <Typography>30,000,431,000</Typography>
                        </ListItemButton>
                        <ListItemButton  divider onClick={handleClose} sx={{justifyContent: 'space-between'}}>
                            <Stack direction={'row'} spacing={4} sx={{alignSelf: 'flex-end'}}>
                                <Box><img src={'https://placehold.co/25'} /></Box>
                                <Stack direction={'row'} spacing={2}>
                                    <Typography>Foo</Typography>
                                    <Divider orientation={'vertical'} sx={{height: '60%'}}/>
                                    <Typography>Bar</Typography>
                                </Stack>
                            </Stack>
                            <Typography>30,000,431,000</Typography>
                        </ListItemButton>
                        <ListItemButton  divider onClick={handleClose} sx={{justifyContent: 'space-between'}}>
                            <Stack direction={'row'} spacing={4} sx={{alignSelf: 'flex-end'}}>
                                <Box><img src={'https://placehold.co/25'} /></Box>
                                <Stack direction={'row'} spacing={2}>
                                    <Typography>Foo</Typography>
                                    <Divider orientation={'vertical'} sx={{height: '60%'}}/>
                                    <Typography>Bar</Typography>
                                </Stack>
                            </Stack>
                            <Typography>30,000,431,000</Typography>
                        </ListItemButton>
                        <ListItemButton  divider onClick={handleClose} sx={{justifyContent: 'space-between'}}>
                            <Stack direction={'row'} spacing={4} sx={{alignSelf: 'flex-end'}}>
                                <Box><img src={'https://placehold.co/25'} /></Box>
                                <Stack direction={'row'} spacing={2}>
                                    <Typography>Foo</Typography>
                                    <Divider orientation={'vertical'} sx={{height: '60%'}}/>
                                    <Typography>Bar</Typography>
                                </Stack>
                            </Stack>
                            <Typography>30,000,431,000</Typography>
                        </ListItemButton>
                        <ListItemButton  divider onClick={handleClose} sx={{justifyContent: 'space-between'}}>
                            <Stack direction={'row'} spacing={4} sx={{alignSelf: 'flex-end'}}>
                                <Box><img src={'https://placehold.co/25'} /></Box>
                                <Stack direction={'row'} spacing={2}>
                                    <Typography>Foo</Typography>
                                    <Divider orientation={'vertical'} sx={{height: '60%'}}/>
                                    <Typography>Bar</Typography>
                                </Stack>
                            </Stack>
                            <Typography>30,000,431,000</Typography>
                        </ListItemButton>
                    </List>
                </MenuItem>
            </Menu>
        </Box>
    );
}