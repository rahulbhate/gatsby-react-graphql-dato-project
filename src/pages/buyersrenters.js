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
        independently, at your own convenience with Uthru. No agents, no set
        times, no hassle.
      </p>
    </div>
    <section className={styles.howWorks}>
      <div id="about">
        <hr className={styles.rounded} />
        <h2>How it works</h2>
        <p></p>
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