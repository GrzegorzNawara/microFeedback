import React from 'react'
import PropTypes from 'prop-types'
import { openFeedbackTree } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  attendees: state.attendees
})

const mapDispatchToProps = {
  onAttendeeListClick: openFeedbackTree
}

const AttendeeList = ({ attendees, onAttendeeListClick }) => (
  <ul>
    {attendees.map(attendee =>
      <li
        key={attendee.id}
        onClick={() => onAttendeeListClick(attendee.id)}>
        {attendee.name}
      </li>
    )}
  </ul>
)

AttendeeList.propTypes = {
  attendees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onAttendeeListClick: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AttendeeList)
