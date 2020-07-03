import React from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"

import styles from "./index.module.scss"
import Title from "../components/title"
import Layouttheme from "../components/layouttheme"
import {
  FaMobile,
  FaClock,
  FaHandPointer,
} from "react-icons/fa"
//https://5eca132a40c162e62f5de8a4--eloquent-booth-2bc360.netlify.app/
const Chat = () => (
  <>
  <Layouttheme>
    <div className={styles.sectionFive}>
      <hr className={styles.special} />
      <h2>Sell and lease real estate smarter and faster</h2>
      <p>
      In response to current challenges, we’ve made agent-free property inspections a reality. We leverage technology to enable you to manage vacant property inspections end-to-end online and prospects to self-tour vacant properties at their own convenience.
      </p>
    </div>
    <section className={styles.howWorks}>
      <div id="about">
        <hr className={styles.rounded} />
        <h2>Here’s how it works</h2>
      </div>
      <p>
        We simplify the process for everyone; saving agents time and money and
        making it easier for people to find the home of their dreams
      </p>
      <ul>
        <li className={styles.bulletHeadings}>
          01 / <b>Join</b>
        </li>
        <li className={styles.bulletContents}>Prospects join uthuru</li>
        <li className={styles.bulletHeadings}>
          02 / <b>Verify</b>
        </li>
        <li className={styles.bulletContents}>
          We verify their identity and pre-authorise their
          credit card to safeguard the property.
        </li>
        <li className={styles.bulletHeadings}>
          03 / <b>Book</b>
        </li>
        <li className={styles.bulletContents}>
          They book their preferred time slot for an
          agent-free-inspection
        </li>
        <li className={styles.bulletHeadings}>
          04 / <b>Access</b>
        </li>
        <li className={styles.bulletContents}>
          They receive a code to independently access
          the property at their allocated time, that later expires
        </li>
        <li className={styles.bulletHeadings}>
          05 / <b>Inspect</b>
        </li>
        <li className={styles.bulletContents}>
        They self-tour the property in their own time then simply drop the keys back in the box on their way out
        </li>
      </ul>
    </section>
    <section className={styles.sectionColumns}>
      <div>
        <span>
          <FaMobile size={48} color={"#fba394"} />
        </span>
        <h2>Safe</h2>
        <p>
          Give prospects private, agent-free access to the property,
          keeping everyone safe whilst saving your time.
        </p>
      </div>
      <div>
        <span>
          <FaClock size={48} color={"#fba394"} />
        </span>

        <h2>Efficient</h2>
        <p>
          No time wasters -- we pre-authenticate 
          all prospects so you only get verified leads.
        </p>
      </div>
      <div>
        <span>
          <FaHandPointer color={"#fba394"} size={48} />
        </span>
        <h2>Convenient</h2>
        <p>
          Verified prospects can instantly schedule an independent inspection
          at a time convenient to them.
        </p>
      </div>
    </section>
    <div className={styles.sectionFive} id="chatForm">
      <hr className={styles.special} />
      <h2>It's easy to get started, Let's chat</h2>
      <p>
      Our innovative solution automates vacant property inspections to save time, reduce overheads and keep everyone safe. To get you through COVID-19 and beyond, get in touch today. 
      </p>
    </div>
    <div className={styles.detailsArea}>
      <form className="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="2BE4EF332AA2E32596E38B640E9056198BDB993E3EB63847E5EF21086953903ECF9187F0F3B85CA6BE80C29E12BD1727B70FF52493C37BEC1232353481063C71">
        <div className={styles.row}><div className={styles.column}><input type="text" id="fieldName" maxlength="200" name="cm-name" placeholder="First Name" /></div></div>
        <div className={styles.row}><div className={styles.column}><input type="text" id="fieldjrkini" maxlength="200" name="cm-f-jrkini" placeholder="Last Name"/></div></div>
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

// export const query = graphql`
//   query ChatQuery {
//     chat: datoCmsChatPage {
//       seoMetaTags {
//         ...GatsbyDatoCmsSeoMetaTags
//       }
//       title
//       subtitle
//       contents
//     }
//   }
// `