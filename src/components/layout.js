import React from "react"
import styles from "./layout.module.scss"
import Header from "./header.js"
import Footer from "./footer.js"

export default ({ children }) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>{children}</div>
    <Footer>
      <section
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            flexBasis: "50%",
            padding: "20px",
          }}
        >
          <h4 style={{ color: "#e6a192", lineHeight: "3em" }}>
            For more information please contact<br></br>
            <a
              href="mailto:hello@uthru.io"
              style={{ color: "white", fontSize: "25px", fontWeight: "normal" }}
            >
              hello@uthru.io
            </a>
          </h4>
          <p>
            <a
              href="#"
              style={{
                color: "white",
                borderBottom: "2px solid #e6a192",
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
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              textAlign: "right",
            }}
          >
            uthru
          </h2>
          <ul
            style={{
              listStyle: "none",
              textAlign: "right",
            }}
          >
            <li>Privacy</li>
            <li>Terms & Conditions</li>
            <li>&copy; Copyright -2020 uthru.Pty.Limited</li>
          </ul>
        </div>
      </section>
    </Footer>
  </div>
)
