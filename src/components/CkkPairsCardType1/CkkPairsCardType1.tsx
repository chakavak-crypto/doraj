'use client';

import {
  Box,
  Card,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TabProps,
  TextField
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useState} from "react";
import {useTranslation} from "@/app/i18n/client";
import styled from "@emotion/styled";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CkkPairsTable from "@/components/CkkPairsTable";

const StyledTab = styled(Tab)<TabProps>(({theme}) => ({
  padding: '4px 8px',
  minHeight: '28px',
  minWidth: '50px',
  lineHeight: '0.65rem'
}))
export default function CkkPairsCardType1(){
  const [marketType, setMarketType] = useState('toman');
  const [t] = useTranslation();

  const handleChangeMarketType = (newVal) => {
    setMarketType(newVal);
  }
  return (
    <Card variant={'outlined'}>
      <Stack
        spacing={1}
        sx={{px: '3px!important', py: '2px!important'}}
      >
        <Box>
          <TextField
            fullWidth
            size={'small'}
            color={'secondary'}
            placeholder={'جستجوی ارز'}
            sx={{
              '& .MuiInputBase-input': {
                py: 1,
                height: '1em'
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          <Paper>
            <Box sx={{ borderColor: 'divider' }}>
              <Tabs value={marketType} sx={{minHeight: '28px'}}>
                <StyledTab onClick={() => handleChangeMarketType('favorite')} value={'favorite'} label={<StarBorderIcon />} />
                <StyledTab onClick={() => handleChangeMarketType('toman')} value={'toman'} label={t('toman')}  />
                <StyledTab onClick={() => handleChangeMarketType('usdt')} value={'usdt'} label="USDT" />
                <StyledTab onClick={() => handleChangeMarketType('usdc')} value="usdc" label="USDC" />
              </Tabs>
            </Box>
          </Paper>
        </Box>
        <Box sx={{px: 1}}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="change" control={<Radio size="small" />} label="تغییر" />
              <FormControlLabel value="volume" control={<Radio size="small" />} label="حجم" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <CkkPairsTable />
        </Box>
      </Stack>
    </Card>
  );
}