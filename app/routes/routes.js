import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from '../Components/Main'
import Home from '../Components/Home'
import HomeContainer from '../Containers/HomeContainer'
import ForecastContainer from '../Containers/ForecastContainer'
import DetailContainer from '../Containers/DetailContainer'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path="forecast/:city" component={ForecastContainer} />
      <Route path="detail/:city" component={DetailContainer} />
    </Route>
  </Router>
), document.getElementById('app'))
