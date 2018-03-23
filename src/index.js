import React from 'react'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import './style/base.css'

FastClick.attach(document.body)

const render = Comment => {
  ReactDOM.render(
    <Comment/>,
    document.getElementById('root')
  )
}

render(App)

registerServiceWorker()
