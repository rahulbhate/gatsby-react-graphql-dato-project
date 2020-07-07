import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./header.module.scss"
import logo from "../images/uthrulogo_pinkBG.png"

const HeaderLinks = props => {
  return (
    <Link className={styles.links} to={props.to}>
      <button className={styles.btnprimary}>{props.text}</button>
    </Link>
  )
}
// LOGO component
const Logo = props => (
  <Link to={props.to}>
    <img src={logo} alt="Logo" width="20%" />
  </Link>
)

const NavMenu2 = props => (
  <>
    <HeaderLinks to="/agents" text="I’m an agent" />
    <HeaderLinks to="/buyersrenters" text="I’m a buyer/renter" />
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
            <h2 className={styles.spantitle}>
            The <span className={styles.spanFuture}>future</span> of property
              inspections
            </h2>
            <p className={styles.subcontents}>
              Crowded open homes are a thing of the past. Inspect vacant properties independently, at your own convenience with Uthru. No agents, no set times, no hassle.
            </p>
            <div className={styles.navigationbuttons}>
              <NavMenu2 />
            </div>
          </div>
        </header>
      </div>
    )}
  />
)
