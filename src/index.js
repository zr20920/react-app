import React from 'react'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick'
import { Provider } from 'react-redux'
import store from '@/store/store'
import registerServiceWorker from '@/registerServiceWorker'
import App from '@/App'
import '@/style/base.css'

FastClick.attach(document.body)

const render = Comment => {
  ReactDOM.render(
    //绑定redux
    <Provider store={store}>
      <Comment/>
    </Provider>,
    document.getElementById('root')
  )
}

render(App)

registerServiceWorker()
