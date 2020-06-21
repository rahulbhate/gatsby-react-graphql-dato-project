import React from "react"
import styles from "./layout.module.scss"
import Header from "./header.js"
import Footer from "./footer.js"
import Navigation from "./navigation.js"
import ScrollToTop from "./ScrollToTop.js"
export default ({ children }) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>{children}</div>
    <Footer>
        <div className={styles.row}>
          <div className={styles.column}>
          <h4>For more information please contact</h4>
          <a href="mailto:hello@uthru.io" style={{color: 'white' ,fontSize: '26pt', fontWeight: 'normal', textDecoration: 'none'}}>hello@uthru.io</a>
          <p><a href="#" style={{color: 'white',borderBottom: '2px solid rgb(230, 161, 146)', fontSize: '20pt', paddingBottom: '2px', textDecoration: 'none', lineHeight: '3.9em'}}>Back To Top</a></p>
          </div>
          <div className={styles.column}>
          <h1 style={{fontsize: '35pt', width: '95%', textAlign:'right', lineHeight: '3.5em'}}> <span style={{color: 'rgb(251, 163, 148)', fontSize: '28pt', textDecoration: 'underline',  fontWeight: 'bold'}}>U</span>thru</h1>
          <ul><li><a href="#">Privacy</a></li><li><a href="#">Terms &amp; Conditions</a></li><li>© Copyright -2020 uthru.Pty.Limited</li></ul>
          </div>
        </div>
    </Footer>
  </div>
)
