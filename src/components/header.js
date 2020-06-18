import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./header.module.scss"

// HeaderLink component
const HeaderLink = props => {
  const activeStyle = {
    color: "#fba394",
    fontWeight: "bold",
    textDecoration: "underline",
  }
  return (
    <Link className={styles.link} to={props.to} activeStyle={activeStyle}>
      {props.text}
    </Link>
  )
}

// LOGO component
const Logo = props => (
  <Link to={props.to}>
    <div className={styles.tt}>
      <h1
        style={{
          marginLeft: "50px",
          color: "white",
          lineHeight: "100px",
        }}
      >
        {props.text}
      </h1>
    </div>
  </Link>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={styles.banner}>
        <div className={styles.overlay}></div>
        <header className={styles.container}>
          <div className={styles.row}>
            <nav>
              <div style={{ flexBasis: "50%" }}>
                <Logo to="/" text={data.site.siteMetadata.title} />
              </div>
              <div>
                <HeaderLink to="/" text="Home" />
                <HeaderLink to="/about" text="How we work" />
                <HeaderLink to="/chat" text="Let's chat" />
              </div>
              {/* <HeaderLink to="/courses" text="Courses" /> */}
            </nav>
          </div>
          <div
            style={{
              //padding: "100px 300px ",

              marginLeft: "300px",
            }}
          >
            <div style={{ lineHeight: "50px" }}>
              <h1>uthru</h1>
              <h2>The future of property inspections</h2>
              <p style={{ lineHeight: "1.5em", width: "50%" }}>
                The future of property inspections The convenience of viewing
                your next home in your own time, agent-free is now a reality.
                Join our waitlist to get exclusive early access.
              </p>
              <form action="#">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Enter your email address"
                  style={{
                    padding: "20px",
                    marginTop: "20px",
                    width: "50%",
                    outline: "none",
                  }}
                />
                <br />
                <br />
                <input
                  type="submit"
                  value="I am an agent"
                  style={{
                    fontSize: "20px",
                    padding: "20px 35px",
                    outline: "none",
                    backgroundColor: "#fba394",
                    color: "white",
                    borderRadius: "5px",
                  }}
                />
                <HeaderLink
                  to="/about"
                  text="I am a Buyer"
                  style={{
                    fontSize: "20px",
                    padding: "20px 35px",
                    backgroundColor: "#fba394",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  {/* <input type="submit" value="I am a Buyer" /> */}
                  <button>Hello</button>
                </HeaderLink>
              </form>
            </div>
          </div>
        </header>
      </div>
    )}
  />
)
