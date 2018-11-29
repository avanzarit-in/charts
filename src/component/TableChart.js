import React, { Component } from 'react';

export default class TableChart extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        window.google.charts.load('current', { packages: ['table'] });
        window.google.charts.setOnLoadCallback(this.drawTable);
    }

    drawTable = () => {


        var data = new window.google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('number', 'Salary');
        data.addColumn('boolean', 'Full Time Employee');
        data.addRows([
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true],
            ['Mike', { v: 10000, f: '$10,000' }, true],
            ['Jim', { v: 8000, f: '$8,000' }, false],
            ['Alice', { v: 12500, f: '$12,500' }, true],
            ['Bob', { v: 7000, f: '$7,000' }, true]
        ]);

        var table = new window.google.visualization.Table(this.refs.dataTable);

        table.draw(data, null);
    }

    render() {
        return (
            <div ref="dataTable"></div>
        )
    }
}