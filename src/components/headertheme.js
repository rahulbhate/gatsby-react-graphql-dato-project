import React,{ useState, useEffect } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./headertheme.module.scss"
import logo from "../images/uthrulogo_purpleBG.png"
import { FaArrowDown } from "react-icons/fa"

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
    <img src={logo} alt="Logo" width="20%" />
  </Link>
)
const NavMenu = (props) => {
  const [header, setHeader] = useState("header");

  const listenScrollEvent = event => {
    if (window.scrollY < 73) {
       setHeader("header");
       console.log(window.scrollY, header);
    } else if (window.scrollY > 70) {
       setHeader("header2");
       console.log(window.scrollY, header);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
   
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [header]);
  return(
    <>
    <nav className={`${styles.header}`}>
              <div className={styles.logo}>
                <Logo />
              </div>
              <div className={styles.navbaritems}>
              <HeaderLink to="/" text="Home" />
              <HeaderLink to="/chat" text="Agents" />
              <HeaderLink to="/about" text="Renters" />
              </div>
    </nav>
    </>
  );
}

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
            <NavMenu />
          </div>
          <div className={styles.headerSectionContents}>
            <p>
              <img src={logo} alt="Logo" width="17%" />
            </p>
            <h2 className={styles.spantitle}>
              The <span className={styles.spanFuture}>future</span> of property
              inspections
            </h2>
            <p className={styles.subcontents}>
              Your business doesn't have to suffer from COVID-19. Save time,
              stay safe and reduce overheads with automated, agent-free property
              inspections.
            </p>
            <div>
              <FaArrowDown size={48} className={styles.bounce} />
            </div>
          </div>
        </header>
      </div>
    )}
  />
)
