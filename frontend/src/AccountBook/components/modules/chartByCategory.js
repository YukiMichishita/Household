import React from 'react';
import { Legend, ReferenceLine, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Brush } from 'recharts';

export default function ChartByCategory(props) {
  return (
    <div className={props.classes.chart}>
      <LineChart width={950} height={600} data={props.datas} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="account_month" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '39px' }} />
        <ReferenceLine y={-1} stroke="#000" />
        <Brush className="TimeLineChart-brush" dataKey="account_month" />
        <Line dataKey="amount" fill="#8884d8" name="金額" />
      </LineChart>
    </div>
  );
}
