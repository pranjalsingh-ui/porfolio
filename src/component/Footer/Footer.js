import React from "react"
import Styles from "./footer.module.css"
import Icons from "./Icons/Icons"

export default function Footer() {
  return (
    <footer className={Styles.footerContainer}>
      <h1 className={Styles.nameHeading}>Pranjal Singh</h1>
      <h1 className={Styles.collegeName}>MS University</h1>
      <h1 className={Styles.collegeName}>Vadodara</h1>
      <h2 className={Styles.year}>2020</h2>
      <Icons />
    </footer>
  )
}
