import * as React from 'react';
import {useId, useLayoutEffect, useRef, useState} from 'react';
import {Avatar, Box, Button, Divider, List, ListItemButton, MenuItemProps, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import {styled} from "@mui/material/styles";


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
export default function CkkSelectType3() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null | undefined>(null);
  const [width, setWidth] = useState(0);
  const elementRef = useRef<any>(null);
  const open = Boolean(anchorEl);
  const containerId = useId();
  const popoverId = useId();
  const buttonId = useId();
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
        startIcon={<Avatar src={'/sheba.jpg'} sx={{width: 25, height: 25}}/>}
      >
        <Box display={'flex'} flexGrow={1} alignItems={'center'}>
          <Typography
            noWrap
            component={'span'}
            display={'inline-block'}
            sx={{
              maxWidth: ['8rem', '6rem']
            }}
          >بانک سامان</Typography>
          <Box component={'span'} fontSize={'large'} mx={'2px'} fontWeight={'lighter'}>|</Box>
          <Box component={'span'}>IR04-056-***12-01</Box>
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
          <div>انتخاب شماره شبا</div>
          <IconButton size={'small'} onClick={handleClose} aria-label="delete">
            <KeyboardArrowUpIcon/>
          </IconButton>
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
                  <Avatar src={'/sheba.jpg'} sx={{width: 25, height: 25}}/>
                </Box>
                <Box flexGrow={1}>
                  <Box>
                    <Box display={'inline-flex'}>
                      <Typography
                        noWrap
                        maxWidth={'100%'}
                      >بانک سامان</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography fontSize={'smaller'} fontWeight={'bolder'}>IR04-056-6118-2900-5104-4412-01</Typography>
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