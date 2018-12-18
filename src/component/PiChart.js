import React,{Component} from 'react';

export default class PiChart extends Component{

    constructor(props){
        super(props);
       
    }

    shouldComponentUpdate(){
        return false;
    }
    componentDidMount(){
        window.google.charts.load('current', {packages: ['corechart']});
        window.google.charts.setOnLoadCallback(this.drawChart);
    }
    drawChart = () =>{
        // Define the chart to be drawn.
      var data = new window.google.visualization.DataTable();

      var options = {'title':'Rejection Breakup Oct\'18'};


      data.addColumn('string', 'Element');
      data.addColumn('number', 'Percentage');
      data.addRows([
        ['Entrap', 0.12],
        ['Others', 0.65],
        ['Flakes', 0.20]
      ]);

      // Instantiate and draw the chart.
      var chart = new window.google.visualization.PieChart(this.refs.piChart);
      chart.draw(data, options);
    }

    render(){
       return(
                <div ref="piChart"></div>
              
        )
    }
}