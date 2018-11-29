import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PiChart from './component/PiChart';
import TableChart from './component/TableChart';
import {Grid} from 'semantic-ui-react'

class App extends Component {
 

  render() {

    return (
      <Grid columns={2}>
      
        <Grid.Column>
        <PiChart/>
        </Grid.Column>
        <Grid.Column>
        <TableChart />
        </Grid.Column>
      </Grid>
      
    );
  }
}

export default App;



