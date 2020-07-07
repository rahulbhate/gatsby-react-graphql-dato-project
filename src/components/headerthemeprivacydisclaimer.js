import React,{ useState, useEffect } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./headerthemeprivacydisclaimer.module.scss"
import logo from "../images/uthrulogo_purpleBG.png"
import logo2 from "../images/uthrulogo_pinkBG.png"
import { FaArrowDown } from "react-icons/fa"

// HeaderLink component
const HeaderLink = props => {
  const activeStyle = {
    color: "#e5a191",
    fontWeight: "bold",
    textDecoration: "underline",
  }
  return (
    <Link className={styles.link} to={props.to} activeStyle={activeStyle}>
      {props.text}
    </Link>
  )
}
const HeaderLinksButtons = props => {
  return (
    <Link className={styles.links} to={props.to}>
      <button className={styles.btnprimary}>{props.text}</button>
    </Link>
  )
}
const NavMenu2 = props => (
  <>
    <HeaderLinksButtons to="/chat/#chatForm" text="Let's chat" />
  </>
)
const HeaderLinkstwo = props => {
  const activeStyle = {
    color: "#e5a191",
    fontWeight: "bold",
    textDecoration: "underline",
  }
  return (
    <Link className={styles.link} to={props.to} activeStyle={activeStyle}>
      {props.text}
    </Link>
  )
}
const NavMenu = (props) => {
 const [isflag, setflag] = useState();
  const listenScrollEvent = event => {
    if (window.scrollY < 5) {
       setflag(false);
       //console.log(window.scrollY, header, isflag);
    } else if (window.scrollY > 5) {
       setflag(true)
      // console.log(window.scrollY, header, isflag);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return(
    <>
    {/* className={`${styles.header} ${header}`} */}
    <nav className={isflag ? styles.header2 : styles.header}>
              <div className={styles.logo}>
              <Link to={props.to}>
                <img src={isflag ? logo : logo} alt="Logo" width="20%" />
              </Link>
              </div>
              <div className={styles.navbaritems}>
                {isflag ? <> <HeaderLinkstwo to="/" text="Home" />
              <HeaderLinkstwo to="/agents" text="Agents" />
              <HeaderLinkstwo to="/buyersrenters" text="Buyers/Renters" /></>:<>  <HeaderLink to="/" text="Home" />
              <HeaderLink to="/agents" text="Agents" />
              <HeaderLink to="/buyersrenters" text="Buyers/Renters" /></>}
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
        </header>
      </div>
    )}
  />
)
