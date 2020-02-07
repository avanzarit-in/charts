import React, { Component } from 'react';
import $ from 'jquery';
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
        var planData = window.google.visualization.arrayToDataTable([
            ['Month', 'Production'],
            ['APR', 28500],
            ['MAY', 28500],
            ['JUN', 15500],
            ['JUL', 20500],
            ['AUG', 23000],
            ['SEP', 17500],
            ['OCT', 26000],
            ['NOV', 26000],
            ['DEC', 31000],
            ['JAN', 0],
            ['FEB', 0],
            ['MAR', 0]

        ]);

        var actualData = window.google.visualization.arrayToDataTable([
            ['Month', 'Production'],
            ['APR', 17718],
            ['MAY', 21843],
            ['JUN', 10994],
            ['JUL', 19876],
            ['AUG', 18905],
            ['SEP', 16377],
            ['OCT', 24418],
            ['NOV', 18029],
            ['DEC', 3320],
            ['JAN', 0],
            ['FEB', 0],
            ['MAR', 0]

        ]);

        var options = {
            'title': 'Annual Production Report - DAP', legend: { position: 'bottom' }, diff: {
                oldData: {
                    opacity: 1, color: '#eeeeee', tooltip: {
                        prefix: 'Planned'
                    }
                },
                newData: {
                    opacity: 1, tooltip: {
                        prefix: 'Actual'
                    }
                }
            }
        };

        var colChartDiff = new window.google.visualization.ColumnChart(this.diffChartRef.current);


        var diffData = colChartDiff.computeDiff(planData, actualData);
        colChartDiff.draw(diffData, options);
        $($('g > g text', $('svg', $(this.diffChartRef.current)))[0]).text("Actual");
        $($('g > g text', $('svg', $(this.diffChartRef.current)))[1]).text("Planned");
    }

    render() {

        return (
            <div ref={this.diffChartRef}></div>

        )
    }
}
