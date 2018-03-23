import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './style/base.css'

const render = Comment => {
  ReactDOM.render(
    <Comment/>,
    document.getElementById('root')
  )
}

render(App)

registerServiceWorker()
