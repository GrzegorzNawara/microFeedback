import React from 'react'

const ListItem = ({ title, subtitle, onClick}) => (
  <div className="btn btn-outline-primary mx-2 my-2" onClick={onClick}>
    {title} <br />
    <span className="small">{subtitle}</span>
  </div>
)

export default ListItem
