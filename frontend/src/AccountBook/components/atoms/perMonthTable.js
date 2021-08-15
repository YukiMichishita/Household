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
    margin: '0 auto',
    width: '90%',
    maxHeight: '100%',
    overflow: 'scroll',
  },
  table: {
    margin: '0',
    width: '100%',
    height: '100%',
    overflow: 'scroll',
  },
  tableBody: {
    height: '100%',
  },
  tableCell: { fontSize: '1.5rem' },
  head: {
    backgroundColor: 'black',
    color: 'white',
    margin: 0,
    fontSize: '1.3rem',
    width: '100%',
  },
  categoryCell: {
    fontSize: '1rem',
    display: 'flex',
    position: 'relative',
    height: '100%',
    width: '80%',
    padding: '0',
    margin: 0,
    whiteSpace: 'nowrap',
  },
  IconButtonDiv: { width: '15%', margin: 0 },
  categoryNameDiv: { flex: '1 0 0', position: 'relative' },
  categoryName: { position: 'relative', top: '5%' },
  chartIconDiv: { position: 'relative', flex: '1 0 auto' },
  chartIcon: { position: 'absolute', margin: 'auto 0', top: 0, bottom: 0 },
  amountCell: { fontSize: '1rem', width: '20%' },
  detailRow: {},
  detailCell: {},
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(n)': {
      backgroundColor: theme.palette.action.hover,
    },
    '& > *': {
      borderBottom: 'unset',
    },
    width: '100%',
  },
}))(TableRow);

function Row(props) {
  const classes = props.classes;
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      {/* カテゴリ毎の金額 */}
      <StyledTableRow className={classes.row}>
        <TableCell component="th" scope="row" className={classes.categoryCell}>
          <div className={classes.IconButtonDiv}>
            <p>
              <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </p>
          </div>
          <div className={classes.categoryNameDiv}>
            <p className={classes.categoryName}>{row.category_name}</p>
          </div>
          <div className={classes.chartIconDiv}>
            <BarChartIcon
              fontSize="large"
              className={classes.chartIcon}
              onClick={() => props.handleLink('chartByCategory', { category: row.category })}
            />
          </div>
        </TableCell>
        <TableCell align="right" className={classes.amountCell}>
          {'¥' + row.amount.toLocaleString()}
        </TableCell>
      </StyledTableRow>

      {/* テーブルをクリックした際にドロップダウンする明細 */}
      <TableRow className={classes.detailRow}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small">
                <TableBody>
                  {row.detail.map((detail) => (
                    <TableRow key={detail.id} onClick={() => props.handleLink('updateExpences', { id: detail.id })}>
                      <TableCell component="th" className={classes.tableCellDate}>
                        {detail.account_date}
                      </TableCell>
                      <TableCell align="right" className={classes.detailCell}>
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
        <TableBody className={classes.tableBody}>
          {props.rows.map((row) => (
            <Row key={row.category} row={row} handleLink={props.handleLink} classes={classes} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
