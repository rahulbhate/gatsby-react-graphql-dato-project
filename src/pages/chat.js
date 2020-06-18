import React from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"
import styles from "./index.module.scss"
import Title from "../components/title"
import Layout from "../components/layout"
import {
  FaMobile,
  FaClock,
  FaHandHolding,
  FaAccessibleIcon,
  FaHandHoldingHeart,
} from "react-icons/fa"
//https://5eca132a40c162e62f5de8a4--eloquent-booth-2bc360.netlify.app/
const Chat = ({ data: { chat } }) => (
  <Layout>
    <div
      style={{
        padding: "100px 0px ",
      }}
    >
      <h2
        style={{
          width: "30%",
          color: "#34324e",
          lineHeight: "2.0em",
          textAlign: "justify",
          marginLeft: "250px",
        }}
      >
        Finding your dream home has never been easier or safer
      </h2>
      <p
        style={{
          width: "30%",
          lineHeight: "1.9em",
          flexBasis: "60%",
          textAlign: "justify",
          marginLeft: "250px",
        }}
      >
        Crowded open homes are a thing of the past. Inspect vacant properties
        independently, at your own convenience with u-thru. No agents, no set
        times, no hassle.
      </p>
    </div>
    <section
      style={{
        backgroundColor: "white",
        padding: "30px 200px 50px 200px",
        margin: "0px 50px 0px 50px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          flexBasis: "60%",
        }}
      >
        <h2 style={{ color: "#e49c8c" }}>Here’s how it works</h2>
      </div>
      <p
        style={{
          color: "#373251",
          lineHeight: "1.7em",
          fontSize: "20px",
          flexBasis: "60%",
        }}
      >
        We simplify the process for everyone; saving agents time and money and
        making it easier for people to find the home of their dreams
      </p>

      <ul
        style={{
          listStyle: "none",
          flexBasis: "60%",
        }}
      >
        <li style={{ color: "#e4a08c" }}>
          01 / <b>Join</b>
        </li>
        <li style={{ color: "#9a9a9a", lineHeight: "3.7em" }}>
          under three minutes
        </li>
        <li style={{ color: "#e4a08c" }}>
          02 / <b>Verify</b>
        </li>
        <li style={{ color: "#9a9a9a", lineHeight: "3.7em" }}>
          your identity once for $9.95 and access a months’ worth of unlimited
          inspections
        </li>
        <li style={{ color: "#e4a08c" }}>
          03 / <b>Book</b>
        </li>
        <li style={{ color: "#9a9a9a", lineHeight: "3.7em" }}>
          Book your preferred time slot for a private, agent-free inspection
        </li>
        <li style={{ color: "#e4a08c" }}>
          04 / <b>Access</b>
        </li>
        <li style={{ color: "#9a9a9a", lineHeight: "3.7em" }}>
          Access the property lockbox with a code sent to your phone
        </li>
        <li style={{ color: "#e4a08c" }}>
          05 / <b>Apply</b>
        </li>
        <li style={{ color: "#9a9a9a", lineHeight: "3.7em" }}>
          They apply for their dream home!
        </li>
      </ul>
    </section>
    <section
      style={{
        padding: "50px 0px 50px 0px",
        margin: "0px 50px 50px 50px",
        backgroundColor: "#393452",
      }}
    >
      <div
        style={{
          flexBasis: "30%",
          paddingBottom: "50px",
        }}
      >
        <span>
          <FaMobile size={48} color={"#fba394"} />
        </span>
        <h2 style={{ color: "#fba394" }}>Safe</h2>
        <p>
          Sign up easily and unlock a world of agent-free vacant property
          inspections.
        </p>
      </div>
      <div
        style={{
          flexBasis: "30%",
          paddingBottom: "50px",
        }}
      >
        <span>
          <FaClock size={48} color={"#fba394"} />
        </span>

        <h2 style={{ color: "#fba394" }}>Efficient</h2>
        <p>
          Instantly schedule independent inspections at times that work for you.
        </p>
      </div>
      <div
        style={{
          flexBasis: "30%",
          paddingBottom: "50px",
        }}
      >
        <span>
          <FaHandHoldingHeart color={"#fba394"} size={48} />
        </span>
        <h2 style={{ color: "#fba394" }}>Convenient</h2>
        <p>
          Gives you and your loved ones private access to each property, keeping
          everyone safe.
        </p>
      </div>
    </section>
    <div
      style={{
        padding: "100px 0px ",
      }}
    >
      <h2
        style={{
          width: "30%",
          color: "#34324e",
          lineHeight: "2.0em",
          textAlign: "justify",
          marginLeft: "250px",
        }}
      >
        Finding your dream home has never been easier or safer
      </h2>
      <p
        style={{
          width: "30%",
          lineHeight: "1.9em",
          flexBasis: "60%",
          textAlign: "justify",
          marginLeft: "250px",
        }}
      >
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
        <input
          type="submit"
          value="Submit"
          style={{
            backgroundColor: "#fba394",
            color: "white",
            padding: "10px 30px",
            border: "2px solid #FFFFFF",
          }}
        />
      </form>
    </div>
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
