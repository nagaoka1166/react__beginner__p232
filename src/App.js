import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Memo from './memo/Memo.js';
import AddForm from './memo/AddForm.js';
import FindForm from './memo/FindForm.js';
import DelForm from './memo/DelForm.js';


// Appコンポーネント
class App extends Component {
  td = {
    width:"250px"
  }


  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Memo</h1>
        <AddForm />
        <tr />
        <table><tbody><tr>
          <td style={this.td}><FindForm /></td>
          <td style={this.td}><DelForm /></td>
        </tr></tbody></table>
        <Memo />
      </div>
    );
  }
}


export default connect()(App);
