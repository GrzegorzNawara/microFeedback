import React from 'react'
import { connect } from 'react-redux'
import List from '../components/List'

const mapStateToProps = (state) => ({
  list_items: state.attendees_array.map( (attendee) => ({
      key: attendee.id,
      title: attendee.name,
      subtitle: attendee.id,
      onListItemClick: () => ( alert(attendee.name) )
  }))
})

const mapDispatchToProps = {
}

const AttendeeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default AttendeeList
