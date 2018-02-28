import { combineReducers } from 'redux'
import attendees from './attendees'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  attendees,
  todos,
  visibilityFilter
})

export default todoApp
