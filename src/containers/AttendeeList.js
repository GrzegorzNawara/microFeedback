import { connect } from 'react-redux'
import List from '../components/List'
import { chooseAttendee } from '../actions'
import debug from '../include/debug'

const getFeedbackOnAttendee = (attendee_id, feedbacks_array) => (
  debug(feedbacks_array,
      'feedbacks_array should be an array',
      typeof feedbacks_array === 'object'
    )
    .filter( (feedback) => feedback.attendee_id === attendee_id )
    .reduce( (result, feedback) => ( result=[...result, feedback.skill_id] ) , [])
)

const mapStateToProps = (state) => ({
  visible: true,
  items: state.attendees_array.map( (attendee) => ({
      key: attendee.id,
      title: attendee.name,
      subtitle: getFeedbackOnAttendee(attendee.id, state.feedbacks_array),
      attendee: attendee
  }))
})

const mapDispatchToProps = {
  onClick: chooseAttendee
}

const AttendeeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default AttendeeList
