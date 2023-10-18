import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
        }
      },
      series: [
        {
          name: "Monthly Earning",
          data: [80, 40, 45, 90, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div >
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
              height="220px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;