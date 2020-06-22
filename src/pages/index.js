import React from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"

import styles from "./index.module.scss"
import Title from "../components/title"
import Layout from "../components/layout"
import {
  FaMobile,
  FaClock,
  FaHandHoldingHeart,
} from "react-icons/fa"
//https://5eca132a40c162e62f5de8a4--eloquent-booth-2bc360.netlify.app/
const Index = ({ data: { home } }) => (
  <>
  <Layout>
  </Layout>
  </>
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