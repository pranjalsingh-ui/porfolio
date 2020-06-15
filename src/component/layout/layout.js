import React from "react"
import Navbar from "../Navbar/Navbar.js"
import Styles from "./layout.module.css"
import "./layout.css"
import Footer from "../Footer/Footer.js"
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className={Styles.flexContainer}>
        <div className={Styles.container}>{children}</div>
        <Footer>Hello</Footer>
      </div>
    </div>
  )
}

export default Layout
