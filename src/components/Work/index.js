import React from 'react'
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'
import { FaBriefcase } from "react-icons/fa"

const Work = ({ className }) => {
  return (
    <div className={className}>
      <h2>Experiencia</h2>
      {siteConfig.jobs && siteConfig.jobs.map(job => (
        <article key={job.start} className='job'>
          <div className="case">
            <FaBriefcase className="social-icon" />
          </div>
          <div className="inner">
            <h3>{job.company}</h3>
            <h4>{job.occupation}</h4>
            <span className="fecha">{!!job.end ? `De ${job.start} a ${job.end}` : `Actualmente desde ${job.start}`}</span>
            <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default styled(Work)`
  .job{
    display:flex;
    margin-bottom:10px;
    .case{
      margin-right: 5px;
      .social-icon{
        font-size: 1.2rem;
        color: #888;
      }
    }
    .inner{
      border-left: 5px solid #eee;
      padding-left: 10px;
      h3,h4,p{
        margin: 0 0 .2rem;
      }
      h3{
        font-size: 1.2rem;
      }
      .fecha{
        font-size:.8rem;
        color:#888;
      }
      p{
        font-size:.9rem;
      }
    }
  }
  
`
