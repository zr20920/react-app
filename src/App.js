import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import NavBar from './pages/navbar/navbar'
import Home from './pages/home/home'
import About from './pages/about/about'

const App = () => (
  <Router>
    <div className="container">
      <div className="tab-panel">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
      <NavBar />
    </div>
  </Router>  
)

export default App
