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
const About = ({ data: { about } }) => (
  <Layout>
    <div className={styles.sectionTwo}>
      <hr className={styles.special} />
      <h2>Finding your dream home has never been easier or safer</h2>
      <p>
        Crowded open homes are a thing of the past. Inspect vacant properties
        independently, at your own convenience with u-thru. No agents, no set
        times, no hassle.
      </p>
    </div>
    <section className={styles.howWorks}>
      <div>
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
    <div className={styles.sectionFive}>
      <hr className={styles.special} />
      <h2>Finding your dream home has never been easier or safer</h2>
      <p>
        Crowded open homes are a thing of the past. Inspect vacant properties
        independently, at your own convenience with u-thru. No agents, no set
        times, no hassle.
      </p>
    </div>

    <div className={styles.detailsArea}>
      <form>
        <input type="text" id="fname" name="fname" placeholder="First Name" />
        <input type="text" id="lname" name="lname" placeholder="Last Name" />
        <input
          type="text"
          id="org"
          name="organisation"
          placeholder="Organization"
        />
        <input type="email" id="email" name="email" placeholder="Email" />
        <input type="text" id="phone" name="phone" placeholder="Phone" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </Layout>
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
