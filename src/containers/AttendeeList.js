import React from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import { chooseAttendee } from '../actions'

const mapStateToProps = (state) => ({
  items: state.attendees_array.map( (attendee) => ({
      key: attendee.id,
      title: attendee.name,
      subtitle: attendee.id,
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
