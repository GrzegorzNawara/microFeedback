import React from 'react'
import PropTypes from 'prop-types'

const Attendee = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'underline' : 'none'
    }}
  >
    {text}
  </li>
)

Attendee.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Attendee
