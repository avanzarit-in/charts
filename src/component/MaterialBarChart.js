import React, { Component } from 'react';

export default class MaretialBarChart extends Component {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();

    }

    shouldComponentUpdate() {

        return true;
    }

    componentDidUpdate() {
        this.drawChart();
    }
    componentDidMount() {
        window.google.charts.load('current', { packages: ['bar'] });
        window.google.charts.setOnLoadCallback(this.drawChart);
    }


    drawChart = () => {
        // Define the chart to be drawn.
        var data = window.google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350]
          ]);

          var options = {
            chart: {
              title: 'Sales (Target vs Actual)',
              subtitle: 'Sales COmparison Report: 2019',
            },
            bars: 'horizontal' // Required for Material Bar Charts.
          };

        // Instantiate and draw the chart.
        var chart = new window.google.charts.Bar(this.chartRef.current);
        chart.draw(data, window.google.charts.Bar.convertOptions(options));
    } 

    render() {
        return (
            <div ref={this.chartRef}></div>

        )
    }
}
