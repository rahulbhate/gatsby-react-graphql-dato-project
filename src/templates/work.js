import React from "react"
import Slider from "react-slick"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsCourse.seoMetaTags} />
    <div
      style={{
        width: "50%",
        display: "inline-block",
      }}
    >
      <h1>{data.datoCmsCourse.name}</h1>
      <p>{data.datoCmsCourse.excerpt}</p>
      <div>
        <Slider infinite={true} slidesToShow={2} arrows>
          {data.datoCmsCourse.gallery.map(({ fluid }) => (
            <img
              alt={data.datoCmsCourse.title}
              key={fluid.src}
              src={fluid.src}
            />
          ))}
        </Slider>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: data.datoCmsCourse.descriptionNode.childMarkdownRemark.html,
        }}
      />
      <div>
        <Img fluid={data.datoCmsCourse.coverImage.fluid} />
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsCourse(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      name
      excerpt
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
