import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-size: 3.4rem;
  margin: 10px 20px;
  color: #fff;
  font-family: 'Indie Flower';
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
`

const Hero = ({ title }) => {
  const data = useStaticQuery(graphql` 
    query HeroImage{
      image: file(relativePath: {eq: "cover.jpg"}) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const HeroContainer = styled.div`
    position: relative;
    display: table;
    width: 100%;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    ${p => `background-image: url(${data.image.childImageSharp.fluid.src});`}
    height: 70vh;
    background-attachment: fixed;
  `

  return (
    <HeroContainer className='hero-cont'>
      <TitleContainer>
        <HeroTitle>{title}</HeroTitle>
      </TitleContainer>
    </HeroContainer>
  )
}

export default Hero
