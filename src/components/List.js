import React from 'react'
import ListItem from './ListItem'

const List = ({list_items}) => (
  <div className="container">
    {list_items.map( list_item =>
      <ListItem
        key={list_item.key}
        title={list_item.title}
        subtitle={list_item.subtitle}
        onListItemClick={list_item.onListItemClick}
      />
    )}
  </div>
)

export default List
