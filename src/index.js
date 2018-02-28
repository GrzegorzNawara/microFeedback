import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import NavBar from './components/NavBar'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <div>
      <NavBar />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
