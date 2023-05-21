import React from 'react';
import ApexCharts from 'apexcharts';
import moment from 'moment-jalaali';
import {data} from '../../../utils/data';

function convertToPersianFormat(date) {
    // Split the input date by the hyphen character "-"
    const parts = date.split("-");
  
    // Extract the year, month, and day from the splitted parts
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
  
    // Construct the Persian date in the desired format "1391/11/11"
    const persianDate = year + "/" + month + "/" + day;
    let transformedDate = moment(persianDate, 'jYYYY/jMM/jDD').valueOf()
    return transformedDate;
  }


class AreaChart extends React.Component {
  constructor(props) {
    super(props);

    let chartData = []
    chartData.push(data.data.map(d => {
        let time = convertToPersianFormat(d[0])
        let num = d[1]
        return([time, num])
    }))

    console.log(chartData)
    this.state = {
      series: [{
        data: chartData[0],
      }],
    };

    this.chartRef = React.createRef();
    console.log(this.state.series[0].data)
  }
  
  componentDidMount() {
    this.chart = new ApexCharts(this.chartRef.current, {
      series: this.state.series,
      chart: {
        type: 'area',
        height: 350,
        id: 'area-datetime',
        zoom: {
          autoScaleYaxis: true,
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          formatter: function (value) {
            return moment(value).format('jYYYY/jMM/jDD');
          },
        //   rotate: -45    TRY TO FIX THIS TO MAKE THE LABELS ON THE BOTTOM ROTATE
        },
      },
      stroke: {
        width: 2, // Set the line width to a thinner value (e.g., 2)
        colors: ['#ff0000'], // Set the line color (e.g., red)
      },
      fill: {
        colors: ['#ff0000'], // Set the area fill color (e.g., red)
        opacity: 0.5, // Set the custom opacity for the area (e.g., 0.5)
      },
      dataLabels: {
        enabled: false, // Disable data labels on the line chart
      },
    });
  
    this.chart.render();
  
    
  const tooltipYLabel = this.chartRef.current.querySelector('.apexcharts-tooltip-y-group .apexcharts-tooltip-text-y-label');
    if (tooltipYLabel) {
        tooltipYLabel.textContent = 'Custom Label:';
    }

    
  }
  
  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
  
  
  

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  render() {
    return <div ref={this.chartRef}></div>;
  }
}

export default AreaChart;
