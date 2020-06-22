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
      <span style={{ 
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
                <HeaderLink to="/about" text="Renting" />
                <HeaderLink to="/chat" text="Estate Agents" />
              </div>
            </nav>
          </div>
          <div className={styles.headerSectionContents}>
            <h1 className={styles.spantitlemain}><span className={styles.spansection}>U</span>thru</h1>
            <h2 className={styles.spantitle}>The <span className={styles.spanFuture}>future</span> of property inspections</h2>
            <p>
              Uthru makes it easier for buyers and renters 
              to find the home of their dreams while saving agents time and money
            </p>
           
              {/* <HeaderLink
                to="/about"
                text="I am a Buyer"
                style={{
                  fontSize: "20px",
                  padding: "20px 35px",
                  backgroundColor: "#fba394",
                  color: "white",
                  borderRadius: "5px",
                }}
              > */}
              <div  style={{
                 float:'left',
                 marginTop: '30px',
                 fontSize: '50px'
                }}>
              <HeaderLink to="/about" text="I'm a renter/buyer" />
                </div>
                <div style={{
                  float:'left',
                 marginTop: '30px',
                 fontSize: '50px'
                }}>
                <HeaderLink to="/chat" text="I'm an agent"  />
                {/* <a href="/chat">I'm an agent</a> */}
                </div>
                <div><FaArrowDown size={48}  className={styles.bounce}/></div>
          </div>
        </header>
      </div>
    )}
  />
)
