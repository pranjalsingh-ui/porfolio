import React from "react"
import { Link } from "gatsby"
import Styles from "./navLink.module.css"

function NavLink({ to, name }) {
  return (
    <li className={Styles.linkContainer}>
      <Link
        to={to}
        activeClassName={Styles.activeClass}
        className={Styles.link}
      >
        {name}
      </Link>
    </li>
  )
}

export default NavLink
