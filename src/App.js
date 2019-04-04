import React, { Component } from 'react';
import Family from './components/Family'
import MyContext from './context/MyContext'

class App extends Component {

  constructor() {
    super()

    this.state = {
      name: 'Ray'
    }
  }

  handleNameChange(name) {
    this.setState({ name })
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        handleNameChange: name => this.handleNameChange(name)
      }}>
        <Family />
      </MyContext.Provider>
    );
  }
}

export default App;
