import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './containers/App'

const initialState = {
  attendees: [
    {id:'user123', name:'Ania #123'},
    {id:'user665', name:'Kasia #443'},
    {id:'user988', name:'Tomek #556'},
    {id:'user922', name:'Staś #522'},
    {id:'user023', name:'Karol #256'}
  ]
};

const store = createStore(
  reducer,
  initialState
);

render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
