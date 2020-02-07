import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PiChart from './component/PiChart';
import TableChart from './component/TableChart';
import ComboChart from './component/ComboChart';
import DiffChart from './component/DiffChart';
import MaretialBarChart from './component/MaterialBarChart'
import { Grid, Segment } from 'semantic-ui-react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.width = 0;
    this.state.height = 0;
  }


  sms_rejections_data = [
    ['Month', 'Actual', null, 'Target'],
    ['domain', 'data', 'annotation', 'data', 'annotation'],
    ['string', 'number', 'number', 'number', 'number'],
    ['April', 0.62, 0.62, 0.78, 0.35],
    ['May', 0.45, 0.45, 0.35, null],
    ['June', 0.44, 0.44, 0.35, null],
    ['July', 0.71, 0.71, 0.35, null],
    ['August', 0.78, 0.78, 0.35, null],
    ['September', 0.64, 0.64, 0.35, null],
    ['October', 0.95, 0.95, 0.35, null],
    ['November', 0.62, 0.62, 0.35, 0.35]
  ];

  bloom_mill_rejections_data = [
    ['Month', 'Actual', null, 'Target'],
    ['domain', 'data', 'annotation', 'data', 'annotation'],
    ['string', 'number', 'number', 'number', 'number'],
    ['April', 0.09, 0.09, 0.1, 0.1],
    ['May', 0.07, 0.07, 0.1, null],
    ['June', 0.04, 0.04, 0.1, null],
    ['July', 0.05, 0.05, 0.1, null],
    ['August', 0.16, 0.16, 0.1, null],
    ['September', 0.07, 0.07, 0.1, null],
    ['October', 0.14, 0.14, 0.1, null],
    ['November', 0.06, 0.06, 0.1, 0.1]
  ];


  updateDimensions = () => {
    console.log("updating ....")
    this.setState({ width: window.width, height: window.height });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {

    return (
      <Grid stackable columns='equal'>
  {/*      <Grid.Row >
          <Grid.Column>
            <Segment><ComboChart data={this.sms_rejections_data} title="SMS Rejections (%)" /></Segment>
            <Segment><ComboChart data={this.bloom_mill_rejections_data} title="Bloom Mill Rejections (%)" /></Segment>
            <Segment><ComboChart data={this.sms_rejections_data} title="Bar Mill Rejections (%)" /></Segment>
          </Grid.Column>

          <Grid.Column>
          <Segment><ComboChart data={this.sms_rejections_data} title="Customer Complaints (%)" /></Segment>
            <Segment><ComboChart data={this.sms_rejections_data} title="WRM Rejections (%)" /></Segment>
            <Segment><PiChart /></Segment>
          </Grid.Column>
   
       </Grid.Row>  */}
        <Grid.Row>
        <Grid.Column>
          <Segment><DiffChart /></Segment>
          </Grid.Column>
    {/*      <Grid.Column>
           <Segment><MaretialBarChart/></Segment>
          
          </Grid.Column> */}
        </Grid.Row>

      </Grid>

    );
  }
}

export default App;
