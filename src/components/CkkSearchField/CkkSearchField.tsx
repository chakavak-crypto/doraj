import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CkkSearchField() {
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        p: '2px 2px',
        display: 'flex',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'divider',
      }}
    >
      <IconButton disabled size={'small'} type="button" aria-label="search">
        <SearchIcon/>
      </IconButton>
      <InputBase
        sx={{ml: 1, flex: 1, p: 0}}
        fullWidth
        size={'small'}
        variant="outlined"
        placeholder={'جستجو'}
        inputProps={{'aria-label': 'search currencies'}}
      />
    </Paper>
  );
}