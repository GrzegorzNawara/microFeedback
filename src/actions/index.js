export const addAttendee = (attendee) => ({
  type: 'ADD_ATTENDEE',
  id: (attendee.id === '') ? 'user_unknown' : attendee.id,
  name: attendee.name
})

export const addSkill = (skill) => ({
  type: 'ADD_SKILL',
  ...skill
})

export const addFeedback = (feedback) => ({
  type: 'ADD_FEEDBACK',
  ...feedback
})

export const chooseArea = (area='') => ({
  type: 'CHOOSE_AREA',
  area
})
