import React from 'react';
import useChartByCategory from '../../hooks/use-chartByCategory';
import ChartByCategory from '../../components/pages/ExpencesChartByCategory';

export default function EnhancedSpendingChartCategory(props) {
  const [data, classes] = useChartByCategory(props);
  return <ChartByCategory classes={classes} data={data} />;
}
