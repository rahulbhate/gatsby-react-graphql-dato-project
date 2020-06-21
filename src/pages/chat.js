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
const Chat = ({ data: { chat } }) => (
  <>
  <Layout>
    <div className={styles.sectionFive} id="chat">
      <hr className={styles.special} />
      <h2>Finding your dream home has never been easier or safer</h2>
      <p>
        Crowded open homes are a thing of the past. Inspect vacant properties
        independently, at your own convenience with u-thru. No agents, no set
        times, no hassle.
      </p>
    </div>

    <div className={styles.detailsArea}>
      <form className="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="2BE4EF332AA2E32596E38B640E9056198BDB993E3EB63847E5EF21086953903ECF9187F0F3B85CA6BE80C29E12BD1727B70FF52493C37BEC1232353481063C71">
        <input type="text" id="fieldName" maxlength="200" name="cm-name" placeholder="First Name" />
        {/* <input type="text" id="lname" name="lname" placeholder="Last Name" /> */}
        <input type="text" id="fieldjrkini" maxlength="200" name="cm-f-jrkini" placeholder="Organization"/>
        <input autocomplete="Email" className="js-cm-email-input qa-input-email" id="fieldEmail" maxlength="200" name="cm-ydukhrj-ydukhrj" required="" type="email"  placeholder="Email" />
        <input id="fieldjrkind" maxlength="200" name="cm-f-jrkind" type="number" placeholder="Phone" />
        <div style={{ textAlign: 'left', paddingTop:'30px'}}>
          <input aria-required="" id="cm-privacy-consent" name="cm-privacy-consent" required="" type="checkbox" /><label for="cm-privacy-consent">I agree</label>
        </div>
        <div>
        <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </Layout>
  </>
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