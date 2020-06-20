import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./header.module.scss"
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
// LOGO component
const Logo = props => (
  <Link to={props.to} style={{textDecoration: 'none'}}>
    <div>
      <h1
        style={{
          color: "white",
          lineHeight: "100px",
          textDecoration: 'none'
        }}
      >
      <span style={{ color: '#fba394',
          fontSize: '28pt',
          textDecoration: 'underline',
          fontWeight: 'bold'}}>U</span>thru
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
              <div style={{ flexBasis: "60%", fontSize:'25px' }}>
                <Logo to="/" text={data.site.siteMetadata.title} style={{ textDecoration: 'none'}}/>
              </div>
              <div>
                <HeaderLink to="/" text="Home" />
                <HeaderLink to="/about" text="How we work" />
                <HeaderLink to="/chat" text="Let's chat" />
              </div>
              {/* <HeaderLink to="/courses" text="Courses" /> */}
            </nav>
          </div>
          <div className={styles.headerSectionContents}>
            <h1 className={styles.spantitlemain}><span className={styles.spansection}>U</span>thru</h1>
            <h2 className={styles.spantitle}>The <span className={styles.spanFuture}>future</span> of property inspections</h2>
            <p>
              The future of property inspections The convenience of viewing your
              next home in your own time, agent-free is now a reality. Join our
              waitlist to get exclusive early access.
            </p>
            <FaArrowDown size={48}  className={styles.bounce}/>
            {/* <form action="#">
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
                {/* <button>Hello</button> */}
              {/* </HeaderLink> */}
            {/* </form> */} 
          </div>
        </header>
      </div>
    )}
  />
)
