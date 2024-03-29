import React from 'react';
import {
  Legend,
  ReferenceLine,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  ResponsiveContainer,
} from 'recharts';

const AmountFormater = (amount) => {
  return '¥' + amount.toString();
};
const MonthFormater = (month) => {
  return month.toString().slice(0, 4) + '/' + month.toString().slice(4, 7);
};

export default function ChartByCategory(props) {
  return (
    <ResponsiveContainer width="100%" height="50%">
      <LineChart data={props.datas} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tickFormatter={MonthFormater} dataKey="account_month" fontSize="0.65rem" />
        <YAxis tickFormatter={AmountFormater} fontSize="0.65rem" />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '39px' }} />
        <ReferenceLine y={-1} stroke="#000" />
        <Brush className="TimeLineChart-brush" dataKey="account_month" />
        <Line dataKey="amount" fill="#8884d8" name="金額" />
      </LineChart>
    </ResponsiveContainer>
  );
}
