import React, { Component } from 'react';

export default class DiffChart extends Component {

    constructor(props) {
        super(props);
        this.diffChartRef = React.createRef();

    }

    shouldComponentUpdate() {

        return true;
    }

    componentDidUpdate() {
        this.drawChart();
    }
    componentDidMount() {
        window.google.charts.load('current', { packages: ['corechart'] });
        window.google.charts.setOnLoadCallback(this.drawChart);
    }


    drawChart = () => {
        // Define the chart to be drawn.
        var oldData = window.google.visualization.arrayToDataTable([
            ['Month', 'Figure'],
            ['Cesar', 250],
            ['Rachel', 4200],
            ['Patrick', 2900],
            ['Eric', 8200]
          ]);
      
          var newData = window.google.visualization.arrayToDataTable([
            ['Month', 'Figure'],
            ['Cesar', 370],
            ['Rachel', 600],
            ['Patrick', 700],
            ['Eric', 1500]
          ]);

        var options = { 'title': 'Diff Chart' };
      

        // Instantiate and draw the chart.
        var barChartDiff = new window.google.visualization.BarChart(this.diffChartRef.current);
        var colChartDiff = new window.google.visualization.ColumnChart(this.diffChartRef.current);
        var diffData = barChartDiff.computeDiff(oldData, newData);
        colChartDiff.draw(diffData, options);
    } 

    render() {
        return (
            <div ref={this.diffChartRef}></div>

        )
    }
}
