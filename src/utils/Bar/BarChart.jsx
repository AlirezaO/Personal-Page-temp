import React from "react";
import ReactApexChart from "react-apexcharts";
import { data } from "../../../utils/data";


class BarChart extends React.Component {
    constructor(props) {
        super(props);

        let categ = []
        let num = []

        data.asn_results.map((item, index) => {

            categ.push(item[0]);
            num.push(item[1]);
          })

        this.state = {
        
            series: [{
            name: 'تعداد',
            data: num
            }],
            options: {
            
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                borderRadius: 3,
                columnWidth: '50%',
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2
            },
            
            grid: {
                row: {
                colors: ['#fff', '#f2f2f2']
                }
            },
            xaxis: {
                labels: {
                rotate: -45
                },
                categories: categ ,
                tickPlacement: 'on'
            },
            yaxis: {
                title: {
                    text: 'Numbers',
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100]
                },
            }
            },
        
      
        };
    }

  

    render() {
      return (
        


  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>



      );
    }
  }


export default BarChart