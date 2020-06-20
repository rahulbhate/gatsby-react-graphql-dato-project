import React from "react"
import styles from "./layout.module.scss"
import Header from "./header.js"
import Footer from "./footer.js"

export default ({ children }) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>{children}</div>
    <Footer>
        <div>
          <h4>
            For more information please contact<br />
            <a
              href="mailto:hello@uthru.io"
              style={{ color: "white", fontSize: "26pt", fontWeight: "normal", textDecoration:'none' }}
            >
              hello@uthru.io
            </a>
          </h4>
          <p className={styles.footerlinks}>
            <a
              href="#"
              style={{
                color: "white",
                borderBottom: "2px solid #e6a192",
                fontSize: '20pt',
                paddingBottom: "2px", 
                textDecoration: "none",
              }}
            >
              Back To Top
            </a>
            </p>
        </div>
        <div
          style={{
            flexBasis: "50%",       
            padding: "20px",
            justifyContent:'flex-end',
            justifyContent:'flex-end'
          }}
        >
        <h1 style={{fontSize: '35pt', textAlign:'right' }}> <span style={{ color: '#fba394',
          fontSize: '28pt',
          textDecoration: 'underline',
          fontWeight: 'bold'}}>U</span>thru</h1>
          <ul
          className={styles.footer}
          >
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li>&copy; Copyright -2020 uthru.Pty.Limited</li>
          </ul>
        </div>
    </Footer>
  </div>
)
