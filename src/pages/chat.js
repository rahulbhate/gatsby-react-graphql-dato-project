import React from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"

import styles from "./index.module.scss"
import Title from "../components/title"
import Layouttheme from "../components/layouttheme"
import {
  FaMobile,
  FaClock,
  FaHandHoldingHeart,
} from "react-icons/fa"
//https://5eca132a40c162e62f5de8a4--eloquent-booth-2bc360.netlify.app/
const Chat = ({ data: { chat } }) => (
  <>
  <Layouttheme>
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
        <div className={styles.row}><div className={styles.column}><input type="text" id="fieldName" maxlength="200" name="cm-name" placeholder="First Name" /></div></div>
        {/* <input type="text" id="lname" name="lname" placeholder="Last Name" /> */}
        <div className={styles.row}><div className={styles.column}><input type="text" id="fieldjrkini" maxlength="200" name="cm-f-jrkini" placeholder="Organization"/></div></div>
        <div className={styles.row}><div className={styles.column}><input autocomplete="Email" className="js-cm-email-input qa-input-email" id="fieldEmail" maxlength="200" name="cm-ydukhrj-ydukhrj" required="" type="email"  placeholder="Email" /></div></div>
        <div className={styles.row}><div className={styles.column}><input id="fieldjrkind" maxlength="200" name="cm-f-jrkind" type="number" placeholder="Phone" /></div></div>
        <div className={styles.row}><div className={styles.columnequals}><input aria-required="" id="cm-privacy-consent" name="cm-privacy-consent" required="" type="checkbox" /><label for="cm-privacy-consent" classname={styles.columnequals} style={{display: 'inline-block', marginLeft: '24px', verticalAlign: 'middle'}}>I agree to be emailed</label></div></div>
        <div className={styles.row}>
        <input type="submit" value="Subscribe" />
        </div>
      </form>
    </div>
  </Layouttheme>
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