import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-react-charts';

import React from 'react';
import '@progress/kendo-react-charts';
import '@progress/kendo-react-popup';
import '@progress/kendo-react-inputs';
import '@progress/kendo-react-intl';
import '@progress/kendo-data-query';
import '@progress/kendo-drawing';
import '@progress/kendo-file-saver';

const series = [
  { category: 'Job Received', value: 0.2545 },
  { category: 'Job Cancelled', value: 0.1552 },
  { category: 'In Progress', value: 0.4059 },
  { category: 'Assigned', value: 0.0911 },
  { category: 'Completed but not Billed', value: 0.0933 },
];

const labelContent = props => {
  let formatedNumber = Number(props.dataItem.value).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 2,
  });
  return `${props.dataItem.category} years old: ${formatedNumber}`;
};

const ChartContainer = () => (
  <Chart title="World Population by Broad Age Groups">
    <ChartLegend position="bottom" />
    <ChartSeries>
      <ChartSeriesItem
        categoryField="category"
        data={series}
        field="value"
        labels={{ visible: false, content: labelContent }}
        type="pie"
      />
    </ChartSeries>
  </Chart>
);

export default ChartContainer;
