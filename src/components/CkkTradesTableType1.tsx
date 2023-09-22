import {createTheme, ThemeProvider, useTheme} from "@mui/material/styles";
import MUIDataTable, {MUIDataTableColumn, MUIDataTableOptions} from "mui-datatables";
import {Avatar, Box, IconButton, Stack, Typography} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import * as React from "react";
import {useMemo} from "react";


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
          padding: '0px',
          textAlign: 'center',
          border: 'none'
        },
      }
    }
  }
};


const columns: MUIDataTableColumn[] = [

  {
    name: 'price',
    label: 'قیمت',
    options: {
      filter: false,
      sort: true,
      display: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack direction={'row'} spacing={0.5} alignItems={'center'} justifyContent={'center'}>
            <Box>
              <Typography fontWeight={'bolder'} noWrap>120,100,123</Typography>
            </Box>
          </Stack>
        );
      },
      customHeadLabelRender: (columnMeta) => (<Box sx={{textAlign: 'center', textWrap: 'nowrap'}}>{columnMeta.label}</Box>)
    }
  },
  {
    name: 'volume',
    label: 'مقدار(بیتکوین)',
    options: {
      filter: false,
      sort: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack direction={'row'} spacing={0.5} alignItems={'center'} justifyContent={'center'}>
            <Box>
              <Typography fontWeight={'bolder'} noWrap>0.0012</Typography>
            </Box>
          </Stack>
        );
      },
      customHeadLabelRender: (columnMeta) => (<Box sx={{textAlign: 'center', textWrap: 'nowrap'}}>{columnMeta.label}</Box>)
    }
  },
  {
    name: 'time',
    label: 'زمان',
    options: {
      filter: false,
      sort: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack direction={'row'} spacing={0.5} alignItems={'center'} justifyContent={'center'}>
            <Box>
              <Typography fontWeight={'bolder'} noWrap>12:10:04</Typography>
            </Box>
          </Stack>
        );
      },
      customHeadLabelRender: (columnMeta) => (<Box sx={{textAlign: 'center', textWrap: 'nowrap'}}>{columnMeta.label}</Box>)
    }
  },
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

export default function CkkTradesTableType1(){
  const theme = useTheme();
  const getMuiTheme = () => createTheme(styles as any, theme)


  const options: MUIDataTableOptions = useMemo(() => ({
    tableId: 'ckk-trades-table',
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
    onRowClick: (rowData: string[], rowMeta: { dataIndex: number, rowIndex: number }) => {
      console.log(rowData)
    }
  }), [])

  return (
    <ThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        data={data}
        options={options}
        elevation={0}
        columns={columns}
      />
    </ThemeProvider>
  );
}