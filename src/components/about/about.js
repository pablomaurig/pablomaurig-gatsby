import React from 'react'

export default ({ title = 'about', text = '' }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}
