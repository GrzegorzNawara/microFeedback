import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App'
import { addAttendee } from './actions'
import { addSkill } from './actions'

const initialState = {
  // data
  attendees_array: [],
  skills_array: [],
  feedbacks_array: [],

  // state
  choosen: {attendee: {}, area: '', skill: ''}
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addAttendee({id:'user123', name:'Ania #123'}));
store.dispatch(addAttendee({id:'user665', name:'Kasia #443'}));
store.dispatch(addAttendee({id:'user988', name:'Tomek #556'}));
store.dispatch(addAttendee({id:'user922', name:'Staś #522'}));
store.dispatch(addAttendee({id:'user023', name:'Karol #256'}));

store.dispatch(addSkill({
  area: 'Współpraca',
  id: 'analiza-sytuacji',
  skill: 'Analiza sytuacji',
  level0: 'Warto rozwinąć ten obszar',
  level1: 'Dobrze rozwinięta umiejętność',
  level2: 'Warto stonować ten obszar'
}));
