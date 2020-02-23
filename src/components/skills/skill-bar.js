import React from 'react'
import styled from 'styled-components'

const SkillBar = ({ className, name, level }) => {
  return (
    <div className={className}>
      <label htmlFor={`${name}-bar`}>{name}</label>
      <div id={`${name}-bar`} className='skill__bar'>
        <div className='skill__level'></div>
      </div>
    </div>
  )
}

SkillBar.displaName = 'SkillBar'

export default styled(SkillBar)`
  width: 100%;
  border-radius:3px;
  overflow: hidden;
  margin-bottom: 1rem;
  .skill__bar {
    width: 100%;
    height: 20px;
    background-color: white;
    box-shadow: inset 0 2px 3px rgba(0,0,0,.15);
    padding: 1px;
    border-radius:3px;
  }
  .skill__level {
    background-color: #428bca;
    width: ${p => p.level || 0}%;
    height: 18px;
    border-radius: 3px 0 0 3px;
    box-shadow: inset 0 -2px 8px rgba(0,0,0,.2);
  }
`
