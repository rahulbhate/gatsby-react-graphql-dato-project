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
    <div className={styles.button}>{props.text}</div>
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
          <Logo to="/" text={data.site.siteMetadata.title} />
          <div className={styles.row}></div>
          <div className={styles.row}>
            <HeaderLink to="/" text="Home" />
            <HeaderLink to="/about" text="How we work" />
            <HeaderLink to="/chat" text="Let's chat" />
          </div>
        </header>
      </div>
    )}
  />
)
