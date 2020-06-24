import React from "react"
import styles from "./layout.module.scss"
import Header from "./header.js"
import { Link, StaticQuery, graphql } from "gatsby"
import logo from "../images/uthrulogo_purpleBG.png"

export default ({ children }) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>{children}</div>
    <div className={styles.footercontainer}>
      <div className={styles.footercolumns}>
        <p className={styles.footercontact}>
          For more information, please contact:
        </p>
        <p className={styles.footermail}>
          <a href="mailto:hello@uthru.io" className={styles.footermail}>
            hello@uthru.io
          </a>
        </p>
        <p>
          <a href="#" className={styles.scrolltop}>
            Back to top
          </a>
        </p>
      </div>
      <div className={styles.footercolumns}>
        <p className={styles.footerlogo}>
          <img src={logo} width="18%" />
        </p>
        <ul className={styles.footernavigation}>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms &amp; Conditions</a>
          </li>
          <li>© Copyright 2020 uthru Pty Limited</li>
        </ul>
      </div>
    </div>
  </div>
)
