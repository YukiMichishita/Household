import React, { useState } from 'react';
import ChartByCategory from '../../components/modules/chartByCategory';

export default function EnhancedChartByCategory(props) {
  let start = String(props.datas[0].account_month);
  let startDate = new Date(start.slice(0, 4), start.slice(5, 6)) ?? '';
  let end = String(props.datas.slice(-1)[0].account_month);
  let endDate = new Date(end.slice(0, 4), end.slice(5, 6));

  const [months, setMonths] = useState([]);
  for (let d = startDate; d < endDate; d.setMonth(d.getMonth() + 1)) {
    setMonths(...months, String(d.getFullYear()) + String(d.getMonth()).padStart(2, '0'));
  }

  return <ChartByCategory datas={props.datas} months={months} />;
}
