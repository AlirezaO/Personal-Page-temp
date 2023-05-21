import React from 'react';
import Chart from 'react-apexcharts'
import {data} from '../../../utils/data'
import { colors } from '../../../utils/colors';
const DonutGraph = () => {
  let series = [];
  let labels = [];
  data.db_results.map((item, index) => {

    labels.push(item[0]);
    series.push(item[1]);
  })

  let state = {
    options: {
      colors: colors.donutChart,
      labels: labels
    },
    series: series,
  }

  return (
    <div className="donut">
      <Chart options={state.options} series={state.series} labels={state.labels} type="donut" width="500" />
      {console.log(series , labels)}
    </div>
  );
}

export default DonutGraph;