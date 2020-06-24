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
const About = ({ data: { about } }) => (
  <>
  <Layouttheme>
  
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
        <li className={styles.bulletContents}>under three minutes</li>
        <li className={styles.bulletHeadings}>
          02 / <b>Verify</b>
        </li>
        <li className={styles.bulletContents}>
          your identity once for $9.95 and access a months’ worth of unlimited
          inspections
        </li>
        <li className={styles.bulletHeadings}>
          03 / <b>Book</b>
        </li>
        <li className={styles.bulletContents}>
          Book your preferred time slot for a private, agent-free inspection
        </li>
        <li className={styles.bulletHeadings}>
          04 / <b>Access</b>
        </li>
        <li className={styles.bulletContents}>
          Access the property lockbox with a code sent to your phone
        </li>
        <li className={styles.bulletHeadings}>
          05 / <b>Apply</b>
        </li>
        <li className={styles.bulletContents}>
          They apply for their dream home!
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
          Sign up easily and unlock a world of agent-free vacant property
          inspections.
        </p>
      </div>
      <div>
        <span>
          <FaClock size={48} color={"#fba394"} />
        </span>

        <h2>Efficient</h2>
        <p>
          Instantly schedule independent inspections at times that work for you.
        </p>
      </div>
      <div>
        <span>
          <FaHandHoldingHeart color={"#fba394"} size={48} />
        </span>
        <h2>Convenient</h2>
        <p>
          Gives you and your loved ones private access to each property, keeping
          everyone safe.
        </p>
      </div>
    </section>
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