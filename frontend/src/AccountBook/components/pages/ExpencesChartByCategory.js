import React from 'react';
import ChartByCategory from '../modules/chartByCategory';
import CategoryMultiSelect from '../atoms/categoryMultiSelect';

export default function ExpencesChartByCategory({ classes, data }) {
  return (
    <React.Fragment>
      <CategoryMultiSelect classes={classes} />
      <ChartByCategory
        datas={data}
        label={{
          category: document.getElementById('category') ? document.getElementById('category').textContent : '',
          subcategory: document.getElementById('subcategory') ? document.getElementById('subcategory').textContent : '',
        }}
        classes={classes}
      />
    </React.Fragment>
  );
}
