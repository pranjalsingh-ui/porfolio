import React from "react"
import NavLink from "./NavLinks/Navlinks"
import Styles from "./Navbar.module.css"
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

function Navbar() {
  const data = useStaticQuery(graphql`
    query {
      sign: file(relativePath: { eq: "home/Signature_of_Andrew_Scheer.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <nav className={Styles.navContainer}>
      <ul className={Styles.navLinks}>
        <NavLink to="/" name="HOME" />
        <li className={Styles.signLinkContainer}>
          <Link to="/">
            <Img
              fluid={data.sign.childImageSharp.fluid}
              className={Styles.signLink}
              objectFit="contain"
              alt="Go to Home"
            />
          </Link>
        </li>
        <NavLink to="/about" name="ABOUT" />
      </ul>
    </nav>
  )
}

export default Navbar
