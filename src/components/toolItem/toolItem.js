import React from 'react'
import './toolItem.css';
const ToolItem = ({name, icon}) => {
  return (
    <div className='toolItem'>
      <div className="icon">
        {icon}
      </div>
      <div className="tool-name">
      {name}
      </div>
    </div>
  )
}

export default ToolItem;