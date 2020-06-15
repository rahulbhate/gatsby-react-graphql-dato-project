import React from "react"
import styles from "./layout.module.scss"
import Header from "./header.js"
import Footer from "./footer.js"

export default ({ children }) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>{children}</div>
    <Footer>
      For more information please contact hello@uthru.io
      <span>Back to top</span>
      <h2>uthru</h2>
      <ul>
        <li>Privacy</li>
        <li>Terms & Conditions</li>
      </ul>
      <p>&copy; Copyright -2020 uthru.Pty.Limited</p>
      <div className="social-icons">
        <a href="">
          <i className="fab fa-twitter fa-2x"> </i>
        </a>
        <a href="">
          <i className="fab fa-facebook fa-2x"> </i>
        </a>
        <a href="">
          <i className="fab fa-instagram fa-2x"> </i>
        </a>
        <a href="">
          <i className="fab fa-github fa-2x"> </i>
        </a>
      </div>
    </Footer>
  </div>
)
