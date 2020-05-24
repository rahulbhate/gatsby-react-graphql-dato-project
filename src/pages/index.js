import React from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"
import Title from "../components/title"
import Layout from "../components/layout"
//https://5eca132a40c162e62f5de8a4--eloquent-booth-2bc360.netlify.app/
const Index = ({ data: { home } }) => (
  <Layout>
    <Title text={home.title} />
    <Title text={home.subtitle} />
    <p>{home.contents}</p>
  </Layout>
)

export default Index

export const query = graphql`
  query IndexQuery {
    home: datoCmsHomePage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      contents
    }
  }
`
