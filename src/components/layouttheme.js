import React from "react"
import styles from "./layout.module.scss"
import Headertheme from "./headertheme.js"
import Footer from "./footer.js"
import { Link, StaticQuery, graphql } from "gatsby"
import logo from "../images/uthrulogo_purpleBG.png"
import Navigation from "./navigation.js"
import ScrollToTop from "./ScrollToTop.js"
export default ({ children }) => (
  <div className={styles.container}>
    <Headertheme />
    <div className={styles.content}>{children}</div>
    <Footer>
        <div className={styles.row}>
          <div className={styles.column}>
          <h4>For more information please contact</h4>
          <a href="mailto:hello@uthru.io" style={{color: 'white' ,fontSize: '20pt', fontWeight: 200, textDecoration: 'none'}}>hello@uthru.io</a>
          <p><a href="#" style={{color: 'white',borderBottom: '2px solid rgb(230, 161, 146)', fontSize: '16pt', paddingBottom: '2px', textDecoration: 'none', lineHeight: '3.9em'}}>Back To Top</a></p>
          </div>
          <div className={styles.column}>
          <img src={logo} alt="Logo" width='15%' style={{ float:'right'}}/>
          <ul><li><a href="#">Privacy</a></li><li><a href="#">Terms &amp; Conditions</a></li><li>© Copyright -2020 uthru.Pty.Limited</li></ul>
          </div>
        </div>
    </Footer>
  </div>
)
