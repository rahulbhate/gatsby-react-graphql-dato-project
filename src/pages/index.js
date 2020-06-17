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
const Index = ({ data: { home } }) => (
  <Layout>
    <article style={{ padding: "30px 200px 50px 150px" }}>
      <h2 style={{ textAlign: "left", color: "#34324e" }}>
        Finding your dream home has never been easier or safer
      </h2>
      <p style={{ textAlign: "left", lineHeight: "1.5em" }}>
        Crowded open homes are a thing of the past. Inspect vacant properties
        independently, at your own convenience with u-thru. No agents, no set
        times, no hassle.
      </p>
    </article>
    <section
      style={{
        backgroundColor: "white",
        padding: "30px 200px 50px 200px",
        margin: "0px 50px 0px 50px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ color: "#e49c8c", fontSize: "30px" }}>
        Here’s how it works
      </h2>
      <p
        style={{
          color: "#373251",
          textAlign: "center",
          lineHeight: "1.7em",
          fontSize: "20px",
        }}
      >
        We simplify the process for everyone; saving agents time and money and
        making it easier for people to find the home of their dreams
      </p>
      <ul style={{ listStyle: "none", textAlign: "center" }}>
        <li style={{ color: "#e4a08c" }}>
          01 / <b>Join</b>
        </li>
        <li style={{ color: "#9a9a9a", paddingBottom: "30px" }}>
          under three minutes
        </li>
        <li style={{ color: "#e4a08c" }}>
          02 / <b>Verify</b>
        </li>
        <li style={{ color: "#9a9a9a", paddingBottom: "30px" }}>
          your identity once for $9.95 and access a months’ worth of unlimited
          inspections
        </li>
        <li style={{ color: "#e4a08c" }}>
          03 / <b>Book</b>
        </li>
        <li style={{ color: "#9a9a9a", paddingBottom: "30px" }}>
          Book your preferred time slot for a private, agent-free inspection
        </li>
        <li style={{ color: "#e4a08c" }}>
          04 / <b>Access</b>
        </li>
        <li style={{ color: "#9a9a9a", paddingBottom: "30px" }}>
          Access the property lockbox with a code sent to your phone
        </li>
        <li style={{ color: "#e4a08c" }}>
          05 / <b>Apply</b>
        </li>
        <li style={{ color: "#9a9a9a", paddingBottom: "30px" }}>
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
          backgroundColor: "#393452",
          paddingBottom: "50px",
        }}
      >
        <p>
          <span>
            <FaMobile size={48} color={"#fba394"} />
          </span>
        </p>
        <h2 style={{ color: "#fba394" }}>Safe</h2>
        <p>
          Sign up easily and unlock a world of agent-free vacant property
          inspections.
        </p>
      </div>
      <div
        style={{
          flexBasis: "30%",
          backgroundColor: "#393452",
          paddingBottom: "50px",
        }}
      >
        <p>
          <span>
            <FaClock size={48} color={"#fba394"} />
          </span>
        </p>
        <h2 style={{ color: "#fba394" }}>Efficient</h2>
        <p>
          Instantly schedule independent inspections at times that work for you.
        </p>
      </div>
      <div
        style={{
          flexBasis: "30%",
          backgroundColor: "#393452",
          paddingBottom: "50px",
        }}
      >
        <p>
          <span>
            <FaHandHoldingHeart color={"#fba394"} size={48} />
          </span>
        </p>
        <h2 style={{ color: "#fba394" }}>Convenient</h2>
        <p>
          Gives you and your loved ones private access to each property, keeping
          everyone safe.
        </p>
      </div>
    </section>
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flexBasis: "33%", border: "1px solid white" }}>
        <h2>Questions? We’re always open for a chat 4</h2>
      </div>
      <div style={{ flexBasis: "33%", border: "1px solid white" }}>
        <h2>Questions? We’re always open for a chat 4</h2>
      </div>
      <div style={{ flexBasis: "33%", border: "1px solid white" }}>
        <p>
          We automate property inspections to give you flexibility and save you
          time while keeping everyone safe.<br></br> If you’d like to know more,
          feel free to get in touch today.
        </p>
      </div>
    </section>
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: 3 }}>
        <h2>Contact Form</h2>
      </div>
      <div style={{ flex: 1 }}>
        <form
          style={{
            textAlign: "left",
            fontSize: "11px",
            color: "white",
          }}
        >
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Rahul Bhate"
            style={{
              color: "#34324e",
              fontSize: "13px",
              backgroundColor: "#fba394",
              border: "0px",
              marginBottom: "20px",
              borderBottom: "1px solid #8d6871",
              paddingBottom: "10px",
            }}
          />
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Last Name"
            style={{
              color: "white",
              fontSize: "13px",
              backgroundColor: "#fba394",
              border: "0px",
              marginBottom: "20px",
              borderBottom: "1px solid #8d6871",
              paddingBottom: "10px",
            }}
          />
          <br />
          <input
            type="text"
            id="org"
            name="organisation"
            placeholder="Organization"
            style={{
              color: "white",
              fontSize: "13px",
              backgroundColor: "#fba394",
              border: "0px",
              marginBottom: "20px",
              borderBottom: "1px solid #8d6871",
              paddingBottom: "10px",
            }}
          />
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            style={{
              color: "white",
              fontSize: "13px",
              backgroundColor: "#fba394",
              border: "0px",
              marginBottom: "20px",
              borderBottom: "1px solid #8d6871",
              paddingBottom: "10px",
            }}
          />
          <br />
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            style={{
              color: "white",
              fontSize: "13px",
              backgroundColor: "#fba394",
              border: "0px",
              marginBottom: "20px",
              borderBottom: "1px solid #8d6871",
              paddingBottom: "10px",
            }}
          />
          <br />
          <br />
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
    </section>
  </Layout>
)

export default Index

export const query = graphql`
  query IndexQuery {
    home: datoCmsHomePage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      contents
    }
  }
`
