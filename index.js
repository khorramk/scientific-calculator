import React, { Component } from 'react';
import { render } from 'react-dom';
import Display from './display.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <Display/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
