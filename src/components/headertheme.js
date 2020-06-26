import React,{ useState, useEffect } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./headertheme.module.scss"
import logo from "../images/uthrulogo_purpleBG.png"
import logo2 from "../images/uthrulogo_pinkBG.png"
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
const HeaderLinkstwo = props => {
  const activeStyle = {
    color: "#393451",
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
    if (window.scrollY < 630) {
       setflag(false);
       //console.log(window.scrollY, header, isflag);
    } else if (window.scrollY > 630) {
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
                <img src={isflag ? logo2 : logo} alt="Logo" width="20%" />
              </Link>
              </div>
              <div className={styles.navbaritems}>
                {isflag ? <> <HeaderLinkstwo to="/" text="Home" />
              <HeaderLinkstwo to="/chat" text="Agents" />
              <HeaderLinkstwo to="/about" text="Buyers/Renters" /></>:<>  <HeaderLink to="/" text="Home" />
              <HeaderLink to="/chat" text="Agents" />
              <HeaderLink to="/about" text="Buyers/Renters" /></>}
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
            Your business doesn’t have to suffer from COVID-19. Save time, stay safe and reduce overheads with automated, agent-free property inspections.
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
