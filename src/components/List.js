import React from 'react'
import ListItem from './ListItem'

const List = ({items, onClick}) => (
  <div className="container">
    {items.map( item =>
        <ListItem
          key={item.key}
          title={item.title}
          subtitle={item.subtitle}
          onClick={() => onClick(item)}
        />
    )}
  </div>
)

export default List
