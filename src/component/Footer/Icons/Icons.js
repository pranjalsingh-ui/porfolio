import React from "react"
import Styles from "./icons.module.css"
function Icons() {
  return (
    <div className={Styles.iconContainer}>
      <a
        href="tel:+91 94527 65636"
        target="_blank"
        rel="noreferrer"
        title="call us"
      >
        <span className={Styles.call} />
      </a>
      <a
        title="email"
        href="mailto:pranjal.ps2000@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <span className={Styles.email} />
      </a>
      <a
        href="https://wa.me/919452765636"
        title="message us on whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <span className={Styles.whatsapp} />
      </a>
      <a
        title="twitter"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/pranjalsingh109"
      >
        <span className={Styles.twitter} />
      </a>
      <a
        target="_blank"
        title="linkdin"
        rel="noreferrer"
        href="https://www.linkedin.com/in/pranjal-singh-3242b8158"
      >
        <span className={Styles.linkdin} />
      </a>
    </div>
  )
}

export default Icons
