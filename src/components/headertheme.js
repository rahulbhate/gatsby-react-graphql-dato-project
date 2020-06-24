import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./headertheme.module.scss"
import logo from "../images/uthrulogo_purpleBG.png"
import {
  FaArrowDown,
} from "react-icons/fa"

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

const NavMenu = props => (
  <>
    <HeaderLink to="/" text="Home" />
    <HeaderLink to="/about" text="Renting" />
    <HeaderLink to="/chat" text="Estate Agents" />
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
              <div className={styles.navbaritems}><NavMenu /></div>
            </nav>
          </div>
          <div className={styles.headerSectionContents}>
            <h1 className={styles.spantitlemain}><span className={styles.spansection}>U</span>thru</h1>
            <h2 className={styles.spantitle}>The <span className={styles.spanFuture}>future</span> of property inspections</h2>
            <p className={styles.subcontents}>
              Your business doesn't have to suffer from COVID-19. Save
              time, stay safe and reduce overheads with automated, agent-free property
              inspections.
            </p>
                <div><FaArrowDown size={48}  className={styles.bounce}/></div>
          </div>
        </header>
      </div>
    )}
  />
)
