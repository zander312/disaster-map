import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import SomeComponent from './components/SomeComponent.js'

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Route path="/" component={SomeComponent}/>
      </Router>
    );
  }
}
