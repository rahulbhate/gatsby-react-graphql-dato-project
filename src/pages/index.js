import React from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"
import Title from "../components/title"
import Layout from "../components/layout"

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
