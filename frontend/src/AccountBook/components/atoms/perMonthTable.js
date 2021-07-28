import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import BarChartIcon from '@material-ui/icons/BarChart';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  tableBackground: {
    position: 'absolute',
    width: 800,
    top: 250,
    left: 95,
    maxHeight: 940,
    overflow: 'scroll',
  },
  table: {
    width: '100%',
    position: 'relative',
    overflow: 'scroll',
  },
  row: {
    width: '100%',
  },
  tableCell: {
    fontSize: 25,
  },
  tableCellDate: {
    fontSize: 25,
    textDecoration: 'underline',
  },
  head: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 40,
  },
  category: {
    fontSize: 40,
  },
  chartIcon: {
    position: 'relative',
    left: 20,
  },
  body: {
    fontSize: 40,
  },
  selectMonthText: {
    position: 'relative',
    width: 200,
    fontSize: 50,
    height: 50,
    top: 150,
    left: 650,
    boxSizing: 'border-box',
    category: {
      fontSize: 40,
      textDecoration: 'underline',
    },
  },

  addCircleIcon: { position: 'relative', fontSize: 80, top: 1200, left: 750 },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function Row(props) {
  const classes = props.classes;
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <StyledTableRow className={classes.row}>
        <TableCell component="th" scope="row" className={classes.category}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {row.category_name}
          <BarChartIcon
            fontSize="large"
            className={classes.chartIcon}
            onClick={() => props.handleLink('chartByCategory', { category: row.category })}
          />
        </TableCell>

        <TableCell align="right" className={classes.body}>
          {'¥' + row.amount.toLocaleString()}
        </TableCell>
      </StyledTableRow>

      <TableRow className={classes.row}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.detail.map((detail) => (
                    <TableRow key={detail.id}>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.tableCellDate}
                        onClick={() => props.handleLink('updateExpences', { id: detail.id })}
                      >
                        {detail.account_date}
                      </TableCell>
                      <TableCell align="right" className={classes.tableCell}>
                        {'¥' + detail.amount.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function PerMonthTable(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.tableBackground} elevation={3}>
      <Table stickyHeader className={classes.table} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <TableCell className={classes.head}>カテゴリ</TableCell>
            <TableCell className={classes.head} align="right">
              金額
            </TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <Row key={row.category} row={row} handleLink={props.handleLink} classes={classes} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
