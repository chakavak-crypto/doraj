'use client';

import * as React from 'react';
import {useMemo} from 'react';
import MUIDataTable, {MUIDataTableColumn, MUIDataTableOptions} from "mui-datatables";
import {createTheme, ThemeProvider, useTheme} from "@mui/material/styles";
import {Avatar, Box, Button, IconButton, Stack, Typography, useMediaQuery} from "@mui/material";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";


const ActionsButtons = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'))

  return isMdDown ? (
    <IconButton color={'inherit'}><ExpandCircleDownOutlinedIcon sx={{transform: 'rotate(90deg)'}}/></IconButton>
  ) : (
    <Stack direction={'row'} spacing={0.5} alignItems={'center'} justifyContent={'end'}>
      <Button size={'small'} variant={'contained'}>واریز</Button>
      <Button size={'small'} variant={'outlined'} color={'secondary'}>برداشت</Button>
      <Button size={'small'} color={'success'}>خرید</Button>
      <Button size={'small'} color={'error'}>فروش</Button>
      <Button size={'small'} variant={'outlined'} color={'secondary'}>تبدیل</Button>
      <Button size={'small'}>انتقال</Button>
    </Stack>
  )
}
const columns: MUIDataTableColumn[] = [
  {
    name: 'name',
    label: 'نام ارز',
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
            <Avatar src={'/btc.jpg'} sx={{width: 25, height: 25}}/>
            <Box>
              <Typography fontWeight={'bolder'} noWrap>بیت کوین</Typography>
              <Typography color={'text.secondary'} fontSize={'smaller'}>BTC</Typography>
            </Box>
          </Stack>
        );
      },
      customHeadLabelRender: (columnMeta) => (<Box sx={{pl: 2}}>{columnMeta.label}</Box>)
    }
  },
  {
    name: 'balance',
    label: 'موجودی',
    options: {
      filter: false,
      sort: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack alignItems={'center'}>
            <Typography fontWeight={'bolder'} noWrap>4,143,450,001</Typography>
            <Typography color={'text.secondary'} fontSize={'smaller'}>IRT</Typography>
          </Stack>
        );
      }
    }
  },
  {
    name: 'value',
    label: 'ارزش',
    options: {
      filter: false,
      sort: true,
      display: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack alignItems={'center'}>
            <Typography fontWeight={'bolder'} noWrap>4,143,450,001</Typography>
            <Typography color={'text.secondary'} fontSize={'smaller'}>IRT</Typography>
          </Stack>
        );
      }
    }
  },
  {
    name: 'available',
    label: 'در دسترس',
    options: {
      filter: false,
      sort: true,
      display: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack alignItems={'center'}>
            <Typography fontWeight={'bolder'} noWrap>4,143,450,001</Typography>
            <Typography color={'text.secondary'} fontSize={'smaller'}>IRT</Typography>
          </Stack>
        );
      }
    }
  },
  {
    name: 'buttons',
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return <ActionsButtons/>
      },
      customHeadLabelRender: (columnMeta) => {
        return '';
      }
    }
  }
]
const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY", 'foo'],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options: MUIDataTableOptions = {
  filter: false,
  download: false,
  print: false,
  pagination: false,
  elevation: 0,
  resizableColumns: false,
  responsive: 'standard',
  search: false,
  tableBodyMaxHeight: '300px',
  viewColumns: false,
  fixedSelectColumn: false,
  confirmFilters: false,
  isRowSelectable: () => false,
  selectableRows: 'none',
  selectableRowsHideCheckboxes: false,
  selectableRowsHeader: false,
  selectToolbarPlacement: 'none',
  fixedHeader: true,
};

const styles = {
  components: {
    MUIDataTable: {
      styleOverrides: {
        caption: {
          display: "none!important"
        },
        paper: {
          borderRadius: 0,
          backgroundColor: 'inherit'
        }
      }
    },
    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          padding: 1,
        },
        contentWrapper: {
          justifyContent: 'center',
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        body: {
          padding: '8px',
        },
      }
    }
  }
};

export default function CkkAssetsTableType1() {
  const theme = useTheme();
  const getMuiTheme = () => createTheme(styles as any, theme)
  const isSmDown = useMediaQuery(theme.breakpoints.down('md'));
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const dynamicColumns = useMemo(() => {
    return columns.map((column) => {
      if (column.name === 'value') {
        if (column.options) {
          if (isXs) {
            column.options['display'] = 'excluded';
          } else {
            column.options['display'] = true;
          }
        }
      }
      if (column.name === 'available') {
        if (column.options) {
          if (isSmDown) {
            column.options['display'] = 'excluded';
          } else {
            column.options['display'] = true;
          }
        }
      }
      return Object.assign({}, column);
    });
  }, [isSmDown, isXs])
  return (
    <ThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        data={data}
        options={options}
        elevation={0}
        columns={dynamicColumns}
      />
    </ThemeProvider>
  );
}