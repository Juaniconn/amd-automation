import React, { Component } from 'react';
import Landing from './components/pages/landing'
import { CssBaseline } from '@material-ui/core'

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline/>
        <Landing/>
      </>
    )
  }
}

export default App;