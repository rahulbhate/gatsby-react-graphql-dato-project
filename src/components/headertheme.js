import React,{ useState, useEffect, useRef } from "react"
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
  console.log({props});
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
  return(
    <>
    <HeaderLink to="/" text="Home" />
    <HeaderLink to="/chat" text="Agents" />
    <HeaderLink to="/about" text="Renters" />
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
            <nav>
              <div className={styles.logo}>
                <Logo />
              </div>
              <div className={styles.navbaritems}>
                <NavMenu backgroundColor='red'/>
              </div>
            </nav>
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
