import React, { Component } from 'react';
import MyContext from '../context/MyContext'

class Person extends Component {

  static contextType = MyContext

  render() {
    return (
      <div>
        <h1>Hello, {this.context.state.name}</h1>
        <input type="text" onChange={e => this.context.handleNameChange(e.target.value)} />
      </div>
    );
  }
}

export default Person;
