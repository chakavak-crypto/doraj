'use client';
import {createTheme, ThemeProvider, useTheme} from "@mui/material/styles";
import MUIDataTable, {MUIDataTableColumn, MUIDataTableOptions} from "mui-datatables";
import * as React from "react";
import {useMemo, useState} from "react";
import {
  Avatar,
  Box,
  Button, Card, CardContent,
  Dialog,
  DialogTitle, Divider, Grid,
  IconButton,
  Slide,
  Stack,
  Typography,
  useMediaQuery
} from "@mui/material";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import CloseIcon from '@mui/icons-material/Close';
import {TransitionProps} from "@mui/material/transitions";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ActionsButtons = () => {
  const theme = useTheme();
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'))

  return isLgDown ? (
    <IconButton color={'inherit'}><ExpandCircleDownOutlinedIcon sx={{transform: 'rotate(90deg)'}}/></IconButton>
  ) : (
    <Stack direction={'row'} spacing={0.5} alignItems={'center'} justifyContent={'end'}>
      <Button size={'small'} variant={'contained'}>واریز</Button>
      <Button size={'small'} variant={'outlined'} color={'secondary'}>برداشت</Button>
      <Button size={'small'} color={'success'}>خرید</Button>
      <Button size={'small'} color={'error'}>فروش</Button>
    </Stack>
  )
}

const columns: MUIDataTableColumn[] = [
  {
    name: 'favorite',
    label: '',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <IconButton>
            <StarBorderIcon />
          </IconButton>
        );
      },
      customHeadLabelRender: (columnMeta) => (<Box></Box>)
    }
  },
  {
    name: 'currency',
    label: 'رمزارز',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack direction={'row'} spacing={0.5} alignItems={'center'} justifyContent={'center'}>
            <Avatar src={'https://assets.rabsana.ir/insecure/s:25:25/g:sm/plain/local:///icons/svg/color/btc.svg'} sx={{width: 25, height: 25}}/>
            <Box>
              <Typography fontWeight={'bolder'} noWrap>بیت کوین</Typography>
              <Typography color={'text.secondary'} fontSize={'smaller'}>BTC</Typography>
            </Box>
          </Stack>
        );
      },
      customHeadLabelRender: (columnMeta) => (<Box sx={{textAlign: 'center', textWrap: 'nowrap'}}>{columnMeta.label}</Box>)
    }
  },
  {
    name: 'buy',
    label: 'قیمت خرید',
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack direction={'row'} spacing={0.5} alignItems={'center'} justifyContent={'center'}>
            <Box>
              <Typography fontWeight={'bolder'} noWrap>14,871,580,100</Typography>
              <Typography color={'text.secondary'} fontSize={'smaller'}>تومان</Typography>
            </Box>
          </Stack>
        );
      },
      customHeadLabelRender: (columnMeta) => (<Box sx={{textAlign: 'center', textWrap: 'nowrap'}}>{columnMeta.label}</Box>)
    }
  },
  {
    name: 'sell',
    label: 'قیمت فروش',
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack direction={'row'} spacing={0.5} alignItems={'center'} justifyContent={'center'}>
            <Box>
              <Typography fontWeight={'bolder'} noWrap>14,871,580,100</Typography>
              <Typography color={'text.secondary'} fontSize={'smaller'}>تومان</Typography>
            </Box>
          </Stack>
        );
      },
      customHeadLabelRender: (columnMeta) => (<Box sx={{textAlign: 'center', textWrap: 'nowrap'}}>{columnMeta.label}</Box>)
    }
  },
  {
    name: 'changes_24h',
    label: 'تغییرات 24h',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
            <Typography fontWeight={'bolder'} color={'success.main'} noWrap>+0.012%</Typography>
          </Stack>
        );
      },
      customHeadLabelRender: (columnMeta) => (<Box sx={{textAlign: 'center', textWrap: 'nowrap'}}>{columnMeta.label}</Box>)
    }
  },
  {
    name: 'chart',
    label: 'نمودار',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
            <img src={'https://nobitex.ir/nobitex-cdn/charts/btc.svg'} width={80} />
          </Stack>
        );
      },
      customHeadLabelRender: (columnMeta) => (<Box sx={{textAlign: 'center', textWrap: 'nowrap'}}>{columnMeta.label}</Box>)
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

export default function CkkCurrenciesTableType1() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('md'));
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const [isCurrencyDetailDialogOpen, setIsCurrencyDetailDialogOpen] = useState(false);
  const getMuiTheme = () => createTheme(styles as any, theme)

  const options: MUIDataTableOptions = useMemo(() => ({
    tableId: 'ckk-currencies-table',
    filter: false,
    download: false,
    print: false,
    pagination: false,
    elevation: 0,
    resizableColumns: false,
    responsive: 'standard',
    search: false,
    tableBodyMaxHeight: '400px',
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
      setIsCurrencyDetailDialogOpen(isSmDown)
    }
  }), [isSmDown])

  const dynamicColumns = useMemo(() => {
    return columns.map((column) => {
      if (column.name === 'changes_24h') {
        if (column.options) {
          if (isXs) {
            column.options['display'] = 'excluded';
          } else {
            column.options['display'] = true;
          }
        }
      }
      if (column.name === 'chart') {
        if (column.options) {
          if (isXs) {
            column.options['display'] = 'excluded';
          } else {
            column.options['display'] = true;
          }
        }
      }
      if (column.name === 'buttons') {
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
      <Dialog
        open={isCurrencyDetailDialogOpen}
        onClose={() => setIsCurrencyDetailDialogOpen(false)}
        fullWidth
        TransitionComponent={Transition}
        keepMounted
      >
        <Box sx={{p: 1}}>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack direction={'row'} alignItems={'center'} spacing={0.5}>
              <Avatar src={'/btc.jpg'} sx={{width: 25, height: 25}} />
              <Typography>بیت کوین</Typography>
              |
              <Typography>BTC</Typography>
            </Stack>
            <Box>
              <IconButton onClick={() => setIsCurrencyDetailDialogOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Stack>
        </Box>
        <Divider />
        <Stack sx={{p: 1}} spacing={2}>
          <Card>
            <CardContent sx={{py: 1}}>
              <Grid container justifyContent={"space-around"}>
                <Grid item color={'text.secondary'}>خرید</Grid>
                <Grid item color={'text.secondary'}>فروش</Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardContent>
              <Grid container justifyContent={"space-around"}>
                <Grid item>
                  <Typography textAlign={'center'} fontWeight={'bold'}>14,412,231,000</Typography>
                  <Typography textAlign={'center'}>IRT</Typography>
                </Grid>
                <Grid item>
                  <Typography textAlign={'center'} fontWeight={'bold'}>14,412,231,000</Typography>
                  <Typography textAlign={'center'}>IRT</Typography>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardContent sx={{py: '4px!important'}}>
              <Grid container justifyContent={'space-between'} alignItems={'center'}>
                <Grid item>
                  تغییرات
                </Grid>
                <Grid item sx={{display: 'flex'}}>
                  <img src={'https://nobitex.ir/nobitex-cdn/charts/btc.svg'} width={80} />
                </Grid>
                <Grid item>
                  12.1%
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card
            elevation={0}
            sx={{
              bgcolor: 'inherit',
              border: '1px dashed grey'
            }}
          >
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Button variant={'contained'} fullWidth>واریز</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant={'outlined'} color={'secondary'} fullWidth>برداشت</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button color={'success'} fullWidth>خرید</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button color={'error'} fullWidth>فروش</Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Stack>
      </Dialog>
    </ThemeProvider>
  );
}