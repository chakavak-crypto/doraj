'use client';

import * as React from 'react';
import {useLayoutEffect, useRef, useState} from 'react';
import {Avatar, Box, Button, Divider, Grid, List, ListItemButton, MenuItemProps, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import CkkButtonType1 from "../CkkButtonType1";
import CkkSearchField from "@/components/CkkSearchField";
import {styled} from "@mui/material/styles";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const CustomMenuItem = styled<MenuItemProps>(MenuItem)(({theme}) => ({
  disableRipple: true,
  '&:hover': {
    backgroundColor: 'inherit',
    cursor: 'auto'
  },
  '&.Mui-focusVisible': {
    background: 'inherit',
  },
  paddingLeft: 4,
  paddingRight: 4,
  pt: 0,
}))
export default function CkkSelectTyp1() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null | undefined>(null);
  const [width, setWidth] = useState(0);
  const elementRef = useRef<any>(null);
  const open = Boolean(anchorEl);
  const containerId = 'assets-container';
  const popoverId = 'assets-list-popover';
  const buttonId = 'switch-asset-button';
  useLayoutEffect(() => {
    const handleResize = () => {
      // @ts-ignore
      setWidth(elementRef.current.offsetWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  useLayoutEffect(() => {
    setWidth(elementRef?.current?.offsetWidth)
  }, [elementRef?.current?.offsetWidth]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(document.getElementById(containerId));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      id={containerId}
      ref={elementRef}
    >
      <Button
        variant={'contained'}
        color={'inherit'}
        id={buttonId}
        fullWidth
        aria-controls={open ? popoverId : undefined}
        aria-describedby={popoverId}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon/>}
        startIcon={<Avatar src={'/btc.jpg'} sx={{width: 25, height: 25}}/>}
      >
        <Box display={'flex'} flexGrow={1} alignItems={'center'}>
          <Typography
            noWrap
            component={'span'}
            display={'inline-block'}
            sx={{
              maxWidth: ['8rem', '6rem']
            }}
          >بیت کوین</Typography>
          <Box component={'span'} fontSize={'large'} mx={'2px'} fontWeight={'lighter'}>|</Box>
          <Box component={'span'}>BTC</Box>
        </Box>
      </Button>
      <Menu
        id={popoverId}
        aria-labelledby={buttonId}
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
        sx={{
          '& .MuiPaper-root': {
            width: width,
          },
          '& .MuiPaper-root .MuiList-root': {
            pt: 0,
          }
        }}
      >
        <CustomMenuItem
          disableRipple
          sx={{
            justifyContent: 'space-between',
          }}
          component={'div'}
        >
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{px: 1}}
          >
            <FormControlLabel value="female" control={<Radio />} label="رمزارز" />
            <FormControlLabel value="male" control={<Radio />} label="ووچر" />
          </RadioGroup>
          <IconButton size={'small'} onClick={handleClose} aria-label="delete">
            <KeyboardArrowUpIcon/>
          </IconButton>
        </CustomMenuItem>
        <CustomMenuItem
          disableRipple
          component={'div'}>
          <CkkSearchField/>
        </CustomMenuItem>
        <Divider sx={{mx: 1, borderBottomWidth: '1px'}}/>
        <CustomMenuItem
          disableRipple
          sx={{
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <Typography sx={{mb: 1}}>جستجوهای اخیر</Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <CkkButtonType1 color={'inherit'} size={'small'}>Item1</CkkButtonType1>
            </Grid>
            <Grid item xs={6}>
              <CkkButtonType1 color={'inherit'} size={'small'}>Item2</CkkButtonType1>
            </Grid>
            <Grid item xs={6}>
              <CkkButtonType1 color={'inherit'} size={'small'}>Item3</CkkButtonType1>
            </Grid>
          </Grid>
        </CustomMenuItem>
        <Divider sx={{mx: 1, borderBottomWidth: '1px'}}/>
        <CustomMenuItem
          disableRipple
          component={'div'}
        >
          <List dense sx={{
            width: '100%',
            maxHeight: '200px',
            position: 'relative',
            overflowY: 'auto',
            overflowX: 'hidden'
          }}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <ListItemButton
                key={i}
                divider
                onClick={handleClose}
                sx={{
                  px: '4px',
                  alignItems: 'center'
                }}>
                <Box mr={0.5}>
                  <Avatar src={'/btc.jpg'} sx={{width: 25, height: 25}}/>
                </Box>
                <Box flexGrow={1}>
                  <Box>
                    <Box display={'inline-flex'}>
                      <Typography
                        noWrap
                        maxWidth={'100%'}
                      >بیت کوین کش</Typography>
                      <Divider orientation={'vertical'} sx={{height: 18, mx: '4px'}}/>
                      <Typography>BTC</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography fontSize={'smaller'} fontWeight={'bolder'}>30,000,431,000 تومان</Typography>
                  </Box>
                </Box>
              </ListItemButton>
            ))}
          </List>
        </CustomMenuItem>
      </Menu>
    </Box>
  );
}