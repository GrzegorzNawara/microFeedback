import React from 'react'

const ListItem = ({ title, subtitle, onListItemClick }) => (
  <div onClick={onListItemClick} className="btn btn-outline-primary mx-2 my-2">
    {title}
    {subtitle}
  </div>
)

export default ListItem
