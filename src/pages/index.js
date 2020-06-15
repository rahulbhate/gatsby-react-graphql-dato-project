import React from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"
import Title from "../components/title"
import Layout from "../components/layout"
//https://5eca132a40c162e62f5de8a4--eloquent-booth-2bc360.netlify.app/
const Index = ({ data: { home } }) => (
  <Layout>
    {/* <Title text={home.title} />
    <Title text={home.subtitle} />
    <p>{home.contents}</p> */}
    <section>
      <h2>Finding your dream home has never been easier or safer</h2>
      <p>
        Crowded open homes are a thing of the past. Inspect vacant properties
        independently, at your own convenience with u-thru. No agents, no set
        times, no hassle.
      </p>
    </section>
    <section>
      <h2>Here’s how it works</h2>
      <p>
        We simplify the process for everyone; saving agents time and money and
        making it easier for people to find the home of their dreams
      </p>
      <ul>
        <li>Join in under three minutes</li>
        <li>
          Verify your identity once for $9.95 and access a months’ worth of
          unlimited inspections
        </li>
        <li>
          Book your preferred time slot for a private, agent-free inspection
        </li>
        <li>Access the property lockbox with a code sent to your phone</li>
        <li> Inspect your dream home in your own time—no rushing, no agents</li>
      </ul>
    </section>
    <section>
      <h2>3 columns section</h2>
      <h2>Quick</h2>
      <p>
        Sign up easily and unlock a world of agent-free vacant property
        inspections.
      </p>
      <h2>Convenient</h2>
      <p>
        Instantly schedule independent inspections at times that work for you.
      </p>
      <h2>Safe</h2>
      <p>
        Gives you and your loved ones private access to each property, keeping
        everyone safe.
      </p>
    </section>
    <section>
      <h2>Questions? We’re always open for a chat 4</h2>
      <p>
        We automate property inspections to give you flexibility and save you
        time while keeping everyone safe. If you’d like to know more, feel free
        to get in touch today.
      </p>
    </section>
    <section>
      <h2>Section 5</h2>
      <form>
        <label for="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" /> <br />
        <label for="fname">Organisation:</label>
        <br />
        <input type="text" id="org" name="organisation" />
        <br />
        <label for="lname">Email:</label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />
        <input type="submit" value="Submit" />
      </form>
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
