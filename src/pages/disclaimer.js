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
const Disclaimer = ({ data: { disclaimer } }) => (
  <>
  <Layouttheme>
    <section className={styles.howWorks}>
      <div id="about">
        <hr className={styles.rounded} />
        <h2>Disclaimer</h2>
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
          <FaHandPointer color={"#fba394"} size={48} />
        </span>
        <h2>Convenient</h2>
        <p>
          Gives you and your loved ones private access to each property, keeping
          everyone safe.
        </p>
      </div>
    </section>
  </Layouttheme>
  </>
)

export default Disclaimer

export const query = graphql`
  query DisclaimerQuery {
    disclaimer: datoCmsDisclaimerPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      contents
    }
  }
`