import React, { Component } from 'react';
import BodyContent from './components/BodyContent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="titleBar">melissa's project log</div>
        <BodyContent />
      </div>
    );
  }
}

export default App;
