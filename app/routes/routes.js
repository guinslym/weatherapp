import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from '../Components/Main'
import Home from '../Components/Home'
import HomeContainer from '../Containers/HomeContainer'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
), document.getElementById('app'))
