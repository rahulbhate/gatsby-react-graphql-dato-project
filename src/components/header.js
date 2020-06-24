import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./header.module.scss"
import logo from "../images/uthrulogo_pinkBG.png"

const HeaderLinks = props => {
  const activeStyle = {
    color: "#393451",
    backgroundColor: '#ffffff',
    fontWeight: "bold",
    textDecoration: "underline",
  }
  return (
    <Link className={styles.links} to={props.to} activeStyle={activeStyle}>
      {props.text}
    </Link>
  )
}
// LOGO component
const Logo = props => (
  <Link to={props.to}><img src={logo} alt="Logo" width='20%'/></Link>
);

const NavMenu2 = props => (
  <>
    <HeaderLinks to="/about" text="I'm a renter/buyer" />
    <HeaderLinks to="/chat" text="I'm an agent Agents" />
  </>
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
              <div className={styles.logo}>
                <Logo />
              </div>
            </nav>
          </div>
          <div className={styles.headerSectionContents}>
            <h2 className={styles.spantitle}>The <span className={styles.spanFuture}>future</span> of property inspections</h2>
            <p className={styles.subcontents}>
              Uthru makes it easier for buyers and renters 
              to find the home of their dreams while saving agents time and money
            </p>
            <p className={styles.bannerbuttons}><NavMenu2 /></p>
          </div>
        </header>
      </div>
    )}
  />
)
