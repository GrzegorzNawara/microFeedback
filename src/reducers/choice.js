const choice = (state = [], action) => {
  switch (action.type) {
    case 'CHOOSE_ATTENDEE':
      return (
        {
          attendee: action.attendee,
          area: state.area,
          skill: state.skill,
          level: -1
        })
    case 'CHOOSE_AREA':
      return (
        {
          attendee: state.attendee,
          area: action.area,
          skill: {},
          level: -1
        })
      case 'CHOOSE_SKILL':
        return (
          {
            attendee: state.attendee,
            area: state.area,
            skill: action.skill,
            level: -1
          })
      case 'CHOOSE_LEVEL':
        return (
          {
            attendee: state.attendee,
            area: state.area,
            skill: state.skill,
            level: action.level
          })
      default:
        return state
  }
}

export default choice
