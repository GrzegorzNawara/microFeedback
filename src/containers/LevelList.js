import { connect } from 'react-redux'
import List from '../components/List'
import { addFeedback } from '../actions'

const mapStateToProps = (state) => ({
  visible: state.choice.show_list === 'SHOW_LEVEL',
  items: [
    {
      key: 'level2',
      title: state.choice.skill.level2,
      subtitle: [state.choice.skill.name],
      attendee_id: state.choice.attendee.id,
      skill_id: state.choice.skill.id,
      level: 2
    }, {
      key: 'level1',
      title: state.choice.skill.level1,
      subtitle: [state.choice.skill.name],
      attendee_id: state.choice.attendee.id,
      skill_id: state.choice.skill.id,
      level: 1
    }, {
      key: 'level0',
      title: state.choice.skill.level2,
      subtitle: [state.choice.skill.name],
      attendee_id: state.choice.attendee.id,
      skill_id: state.choice.skill.id,
      level: 0
    }
  ].filter( (item) => item.title !== undefined )
})

const mapDispatchToProps = {
  onClick: addFeedback
}

const LevelList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default LevelList
