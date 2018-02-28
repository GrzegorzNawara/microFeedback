import React from 'react'
import PropTypes from 'prop-types'
import Attendee from './Attendee'

const AttendeeList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Attendee
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

AttendeeList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default AttendeeList
