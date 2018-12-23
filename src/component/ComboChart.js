import React, { Component } from 'react';

export default class ComboChart extends Component {

    constructor(props) {
        super(props);
    }


    shouldComponentUpdate() {

        return true;
    }

    componentDidUpdate() {
        this.drawComboChart();
    }

    componentDidMount() {
        window.google.charts.load('current', { packages: ['corechart'] });
        window.google.charts.setOnLoadCallback(this.drawComboChart);
    }

    drawComboChart = () => {
        // Some raw data (not necessarily accurate)
        let processData = [...this.props.data]
        var data = new window.google.visualization.DataTable();
        //First column is always domain
        data.addColumn({ type: processData[2][0], role: processData[1][0], label: processData[0][0] });
        data.addColumn({ type: processData[2][1], role: processData[1][1], label: processData[0][1] });
        data.addColumn({ type: processData[2][2], role: processData[1][2], label: processData[0][2] });
        data.addColumn({ type: processData[2][3], role: processData[1][3], label: processData[0][3] });
        data.addColumn({ type: processData[2][4], role: processData[1][4], label: processData[0][4] });
        // console.log(this.props.data.splice(2));
        data.addRows(processData.splice(3));
        var options = {
            title: this.props.title,

            vAxis: { title: 'Rejection (%)' },
            hAxis: { title: 'Month' },
            seriesType: 'line',
            series: { 1: { pointSize: 5, } },

        };

        var chart = new window.google.visualization.ComboChart(this.refs.comboChart);
        chart.draw(data, options);

    }

    render() {
        console.log(this.props.title);
        return (
            <div ref={"comboChart"} ></div>
        );
    }
}
