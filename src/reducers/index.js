import { combineReducers } from 'redux'
import attendees from './attendees'
import skills from './skills'

const microfeedbackApp = combineReducers({
  attendees_array: attendees,
  skills_array: skills
})

export default microfeedbackApp
