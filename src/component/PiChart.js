import React, { Component } from 'react';

export default class PiChart extends Component {

    constructor(props) {
        super(props);
        this.piChartRef = React.createRef();

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

    chartClicked = (targetId)=>{
        console.log(targetId);
    }
    drawChart = () => {
        // Define the chart to be drawn.
        var data = new window.google.visualization.DataTable();

        var options = { 'title': 'Rejection Breakup Oct\'18' };


        data.addColumn('string', 'Element');
        data.addColumn('number', 'Percentage');
        data.addRows([
            ['Entrap', 0.12],
            ['Others', 0.65],
            ['Flakes', 0.20]
        ]);

        // Instantiate and draw the chart.
        var chart = new window.google.visualization.PieChart(this.piChartRef.current);
        window.google.visualization.events.addListener(chart, 'click', this.chartClicked);
        chart.draw(data, options);
    } 

    render() {
        return (
            <div ref={this.piChartRef}></div>

        )
    }
}
