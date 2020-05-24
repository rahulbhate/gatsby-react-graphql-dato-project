import React from "react"
import { graphql } from "gatsby"
//import { HelmetDatoCms } from 'gatsby-source-datocms'
//import Img from "gatsby-image"
import Title from "../components/title"
import Layout from "../components/layout"

const About = ({ data: { about } }) => (
  <Layout>
    {/* <HelmetDatoCms seo={about.seoMetaTags} /> */}
    <div>
      <Title text={about.title} />
      <Title text={about.subtitle} />
      <p>{about.contents}</p>
    </div>
  </Layout>
)

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      contents
    }
  }
`
