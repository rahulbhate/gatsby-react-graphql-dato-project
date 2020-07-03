import React from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"

import styles from "./index.module.scss"
import Title from "../components/title"
import Layoutthemerenters from "../components/layoutthemerenters"
import {
  FaMobile,
  FaClock,
  FaHandPointer
} from "react-icons/fa"
//https://5eca132a40c162e62f5de8a4--eloquent-booth-2bc360.netlify.app/
const About = () => (
  <>
  <Layoutthemerenters>
  <div className={styles.sectionFive}>
      <hr className={styles.special} />
      <h2>Finding your dream home has never been easier or safer</h2>
      <p>
        Crowded open homes are a thing of the past. Inspect vacant properties
        independently, at your own convenience with u-thru. No agents, no set
        times, no hassle.
      </p>
    </div>
    <section className={styles.howWorks}>
      <div id="about">
        <hr className={styles.rounded} />
        <h2>Here’s how it works</h2>
      </div>
      <p></p>
      <ul>
        <li className={styles.bulletHeadings}>
          01 / <b>Join</b>
        </li>
        <li className={styles.bulletContents}>Join in under three minutes</li>
        <li className={styles.bulletHeadings}>
          02 / <b>Verify</b>
        </li>
        <li className={styles.bulletContents}>
          Verify your identity
        </li>
        <li className={styles.bulletHeadings}>
          03 / <b>Book</b>
        </li>
        <li className={styles.bulletContents}>
        Book your private, agent-free inspection
        </li>
        <li className={styles.bulletHeadings}>
          04 / <b>Access</b>
        </li>
        <li className={styles.bulletContents}>
        Access the vacant property with a code sent to your phone
        </li>
        <li className={styles.bulletHeadings}>
          05 / <b>Inspect</b>
        </li>
        <li className={styles.bulletContents}>
        Inspect the vacant property at your chosen time—no agents, no crowds, no hassle
        </li>
      </ul>
    </section>
    <section className={styles.sectionColumns}>
      <div>
        <span>
          <FaMobile color={"#fba394"} size={48} />
        </span>
        <h2>Safe</h2>
        <p>
          Gives you and your loved ones private access to each property, keeping
          everyone safe.
        </p>
      </div>
      <div>
        <span>
          <FaClock size={48} color={"#fba394"} />
        </span>
        <h2>Quick</h2>
        <p>
          Sign up easily and unlock a world of agent-free property
          inspections.
        </p>
      </div>
      <div>
        <span>
          <FaHandPointer size={48} color={"#fba394"} />
        </span>
        <h2>Convenient</h2>
        <p>
          Instantly schedule independent inspections at times that work for you.
        </p>
      </div>
      <div id="chatForm"></div>
    </section>
    
    <div className={styles.sectionFive}>
      <hr className={styles.special} />
      <h2>Join the Uthru revolution!</h2>
      <p>
      Inspect vacant properties independently at your convenience. No agents, no set times, no hassle. Join the Uthru revolution today.
      </p>
    </div>
    <div className={styles.detailsArea}>
    <form className="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="2BE4EF332AA2E32596E38B640E9056198BDB993E3EB63847E5EF21086953903ECF9187F0F3B85CA6BE80C29E12BD1727B70FF52493C37BEC1232353481063C71">
        <div className={styles.row}><div className={styles.column}><input aria-label="First name" id="fieldjruuiit" maxlength="200" name="cm-f-jruuiit" placeholder="First Name" /></div></div>
        <div className={styles.row}><div className={styles.column}><input aria-label="Last Name" id="fieldjruuiij" maxlength="200" name="cm-f-jruuiij" placeholder="Last Name"/></div></div>
        <div className={styles.row}><div className={styles.column}><input aria-label="Organisation" id="fieldjrkini" maxlength="200" name="cm-f-jrkini" placeholder="Organization"/></div></div>
        <div className={styles.row}><div className={styles.column}><input aautocomplete="Email" aria-label="Email" class="js-cm-email-input qa-input-email" id="fieldEmail" maxlength="200" name="cm-ydukhrj-ydukhrj" required="" type="email"  placeholder="Email" /></div></div>
        <div className={styles.row}><div className={styles.column}><input aria-label="Phone" id="fieldjrkind" maxlength="200" name="cm-f-jrkind" type="number" placeholder="Phone" /></div></div>
        <div className={styles.row}><div className={styles.columnequals}><input aria-required="" id="cm-privacy-consent" name="cm-privacy-consent" required="" type="checkbox" /><label for="cm-privacy-consent" classname={styles.columnequals} style={{display: 'inline-block', marginLeft: '24px', verticalAlign: 'middle'}}>I agree to be emailed</label>
        <input id="cm-privacy-consent-hidden" name="cm-privacy-consent-hidden" type="hidden" value="true"></input>
        </div></div>
        <div className={styles.row}>
        <input type="submit" value="Join" />
        </div>
      </form>
      <script type="text/javascript" src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></script>
    </div>
  </Layoutthemerenters>
  </>
)

export default About

// export const query = graphql`
//   query AboutQuery {
//     about: datoCmsAboutPage {
//       seoMetaTags {
//         ...GatsbyDatoCmsSeoMetaTags
//       }
//       title
//       subtitle
//       contents
//     }
//   }
// `