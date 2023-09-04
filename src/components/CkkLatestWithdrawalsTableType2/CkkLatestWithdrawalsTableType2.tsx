'use client';
import {createTheme, ThemeProvider, useTheme} from "@mui/material/styles";
import MUIDataTable, {MUIDataTableColumn, MUIDataTableOptions} from "mui-datatables";
import * as React from "react";
import {Avatar, Box, Button, IconButton, Stack, TableCell, TableRow, Typography, useMediaQuery} from "@mui/material";
import {useMemo} from "react";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CkkChipType1 from "@/components/CkkChipType1";
import CkkChipType2 from "@/components/CkkChipType2";
import Link from "next/link";


const columns: MUIDataTableColumn[] = [
  {
    name: 'created_at',
    label: 'تاریخ و زمان',
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack direction={'row'} spacing={0.5} alignItems={'center'} justifyContent={'center'}>
            <Box>
              <Typography fontWeight={'bolder'} noWrap>1402/02/31</Typography>
              <Typography color={'text.secondary'}>15:06</Typography>
            </Box>
          </Stack>
        );
      },
    }
  },
  {
    name: 'withdrawal_id',
    label: 'شماره تراکنش',
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack>
            <Typography fontWeight={'bolder'} noWrap>459871023</Typography>
          </Stack>
        );
      },
      customHeadLabelRender: (columnMeta) => (<Box sx={{textAlign: 'center'}}>{columnMeta.label}</Box>)
    }
  },
  {
    name: 'sheba',
    label: 'شماره شبا',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack direction={'row'} spacing={0.5} alignItems={'center'} justifyContent={'center'}>
            <Typography fontWeight={'bolder'} noWrap>IR10-452-10421-4341-1031</Typography>
          </Stack>
        );
      }
    }
  },
  {
    name: 'amount',
    label: 'مقدار',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack>
            <Typography fontWeight={'bolder'} noWrap>1,500,000</Typography>
            <Typography color={'text.secondary'} fontSize={'smaller'}>تومان</Typography>
          </Stack>
        );
      }
    }
  },
  {
    name: 'tracking_id',
    label: 'کد پیگیری',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack alignItems={'center'}>
            <Typography fontWeight={'bolder'} noWrap>45312359812</Typography>
          </Stack>
        );
      }
    }
  },
  {
    name: 'status',
    label: 'وضعیت',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <CkkChipType2 label={'موفق'} color={'success'} />
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
        return <Button>تماس با پشتیبانی</Button>
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
      styleOverrides:{
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
          padding: 5,
          textAlign: 'center',
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
          textAlign: 'center',
        },
      }
    }
  }
};

export default function CkkLatestWithdrawalsTableType2(){
  const theme = useTheme();
  const getMuiTheme = () => createTheme(styles as any, theme)
  const isSmDown = useMediaQuery(theme.breakpoints.down('md'));
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const dynamicColumns = useMemo(() => {
    return  columns.map((column) => {
      if(column.name === 'value'){
        if (column.options) {
          if(isXs){
            column.options['display'] = 'excluded';
          }else{
            column.options['display'] = true;
          }
        }
      }
      if(column.name === 'available'){
        if (column.options) {
          if(isSmDown){
            column.options['display'] = 'excluded';
          }else{
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