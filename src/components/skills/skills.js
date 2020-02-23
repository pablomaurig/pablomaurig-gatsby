import React from 'react'
import styled from 'styled-components'
import SkillBar from './skill-bar'

export default styled(({ className, title = 'Skills', skills = [] }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      {skills.map(skill => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  )
})`
  width: 100%;
`
