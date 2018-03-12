import React from 'react'
import debug from '../include/debug'

const ListItem = ({ title, subtitle, onClick}) => (
  <div className="col-12 bg-warning px-2 py-1 mx-2 my-2 justify-content-right align-items-center"
    onClick={e => {
        e.stopPropagation(); // preserve click outside for modal
        onClick();
      }}>
    {title}
    <div className='small'>{
      debug(subtitle,
        'subtitle should be an array of texts to show',
        typeof subtitle === 'object'
      ).map( (subtitle_item) =>
         <div key={title+subtitle_item}>
           {subtitle_item}
         </div>
      )
    }</div>
  </div>
)

export default ListItem
