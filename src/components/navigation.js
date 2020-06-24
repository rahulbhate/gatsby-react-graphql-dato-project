import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./navigation.module.scss"
import { FaArrowDown } from "react-icons/fa"

// HeaderLink component
const HeaderLink = props => {
  const activeStyle = {
    color: "#393452",
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
  <Link to={props.to} style={{ textDecoration: "none" }}>
    <div>
      <h1
        style={{
          color: "white",
          lineHeight: "100px",
          textDecoration: "none",
        }}
      >
        <span
          style={{
            fontSize: "28pt",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          U
        </span>
        thru
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
        <header className={styles.container}>
          <div className={styles.row}>
            <nav>
              <div style={{ flexBasis: "60%", fontSize: "25px" }}>
                <Logo
                  to="/"
                  text={data.site.siteMetadata.title}
                  style={{ textDecoration: "none" }}
                />
              </div>
              <div>
                <HeaderLink to="/" text="Home" />
                <HeaderLink to="/about" text="How we work" />
                <HeaderLink to="/chat" text="Let's chat" />
              </div>
            </nav>
          </div>
        </header>
      </div>
    )}
  />
)
