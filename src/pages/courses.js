import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styles from "./courses.module.scss"
const Courses = ({ data }) => (
  <Layout>
    {data.allDatoCmsCourse.edges.map(({ node: work }) => (
      <div key={work.id} className={styles.cards}>
        <Link to={`/works/${work.slug}`}>
          <Img fluid={work.coverImage.fluid} className={styles.cards__image} />
        </Link>
        <h4 className={styles.cards__title}>
          <Link to={`/works/${work.slug}`}>{work.name}</Link>
        </h4>
        <button className={styles.button}>Add to cart</button>
        <p className={styles.cards__price}>AUD ${work.price}</p>
        <p className={styles.cards__subtitle}>{work.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export default Courses

export const query = graphql`
  query CourseQuery {
    allDatoCmsCourse(sort: { fields: [description], order: ASC }) {
      edges {
        node {
          id
          name
          slug
          excerpt
          price
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
