import React, { Component } from 'react';
import BodyContent from './components/BodyContent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="titleBar">So how's that project going?</div>
        <BodyContent />
      </div>
    );
  }
}

export default App;
