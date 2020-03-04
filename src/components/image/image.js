import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ alt, className, imagen }) => {
  return (
    <StaticQuery
      query={
        graphql`
        query {
          allImageSharp {
            edges {
              node {
                fixed(width: 200, height:200) {
                  ...GatsbyImageSharpFixed
                  originalName
                }
              }
            }
          }
        }

      `
      }

      render={data => {
        const image = data.allImageSharp.edges.find(
          edge => {
            return edge.node.fixed.originalName === imagen
          }
        )

        if (!image) {
          return null
        }

        return <Img
          fixed={image.node.fixed}
          alt={alt}
          className={className} />
      }}
    />
  )
}

export default Image;