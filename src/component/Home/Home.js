import React from "react"
import Img from "gatsby-image/withIEPolyfill/index"
import Styles from "./home.module.css"

function Home({ data }) {
  console.log(data.lady.childImageSharp.fluid)
  return (
    <div className={Styles.homeContainer}>
      <div className={Styles.signContainer}>
        <Img
          objectFit="contain"
          fluid={data.sign.childImageSharp.fluid}
          className={Styles.signImg}
        />
      </div>
      <h1 className={Styles.heading}>PHOTOGRAPHY AND PAINTINGS</h1>
      <div className={Styles.lady}>
        <Img
          alt="monochromatic fashion photography"
          objectFit="contain"
          fluid={data.lady.childImageSharp.fluid}
          className={Styles.ladyImg}
        />
      </div>
      <div className={Styles.deadpool}>
        <Img
          alt="painting-deadpool"
          objectFit="contain"
          fluid={data.deadpool.childImageSharp.fluid}
          className={Styles.deadpoolImg}
        />
      </div>
      <div className={Styles.deadpool}>
        <Img
          alt="london silhouette"
          objectFit="contain"
          fluid={data.metropolis.childImageSharp.fluid}
          className={Styles.deadpoolImg}
        />
      </div>
      <div className={Styles.batman}>
        <Img
          alt="painting-batman"
          objectFit="contain"
          fluid={data.batman.childImageSharp.fluid}
          className={Styles.batmanImg}
        />
      </div>
    </div>
  )
}

export default Home
