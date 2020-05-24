import React from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"
import Title from "../components/title"
import Layout from "../components/layout"

const Chat = ({ data: { chat } }) => (
  <Layout>
    <Title text={chat.title} />
    <Title text={chat.subtitle} />
    <p>{chat.contents}</p>
  </Layout>
)

export default Chat

export const query = graphql`
  query ChatQuery {
    chat: datoCmsChatPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      contents
    }
  }
`
