import { combineReducers } from 'redux'
import attendees from './attendees'
import skills from './skills'
import choice from './choice'

const microfeedbackApp = combineReducers({
  attendees_array: attendees,
  skills_array: skills,
  choice: choice
})

export default microfeedbackApp
