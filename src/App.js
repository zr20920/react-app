import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import React, { Component } from 'react'
import asyncComponent from '@/utils/asyncComponent'

import Navbar from './pages/navbar/navbar'
import Home from '@/pages/home/home'
const About = asyncComponent(() => import('@/pages/about/about'))

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="tab-panel">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Redirect to="/" />
            </Switch>
          </div>
          <Navbar />
        </div>
      </BrowserRouter>
    )
  }
}
