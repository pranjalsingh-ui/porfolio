import React from "react"
import Styles from "./About.module.css"
import Img from "gatsby-image/withIEPolyfill"
export default function About({ data }) {
  return (
    <div className={Styles.container}>
      <div className={Styles.imgContainer}>
        <p className={Styles.content}>
          Hello,I am Pranjal Singh,A graduate in PhotoGraphy from Maharaja
          Sayajirao University of Baroda.Having my hands on experience well on
          photography and painting,i am also well equipped with Knowledge of
          photoshop,illustrator,In Design,Premiere Pro and After effects.
        </p>
        <p className={Styles.content1}>
          You can see my Work in Home tab up there and below are my skills and
          software i am good at.
        </p>
        <div className={Styles.iconContainer}>
          <Img
            objectFit="contain"
            fluid={data.camera.childImageSharp.fluid}
            alt="Camera Lens"
            className={Styles.icon}
          />
          <Img
            objectFit="contain"
            fluid={data.photoShop.childImageSharp.fluid}
            alt="Adobe PhotoShop"
            className={Styles.icon}
          />
          <Img
            objectFit="contain"
            fluid={data.xd.childImageSharp.fluid}
            alt="Adobe XD"
            className={Styles.icon}
          />
          <Img
            objectFit="contain"
            fluid={data.illustrator.childImageSharp.fluid}
            alt="Adobe Illustrator"
            className={Styles.icon}
          />
          <Img
            objectFit="contain"
            fluid={data.premiere.childImageSharp.fluid}
            alt="Adobe premiere"
            className={Styles.icon}
          />
          <Img
            objectFit="contain"
            fluid={data.au.childImageSharp.fluid}
            alt="Adobe au"
            className={Styles.icon}
          />
          <Img
            objectFit="contain"
            fluid={data.inDesign.childImageSharp.fluid}
            alt="Camera inDesign"
            className={Styles.icon}
          />
          <Img
            objectFit="contain"
            fluid={data.lightRoom.childImageSharp.fluid}
            alt="Adobe lightRoom"
            className={Styles.icon}
          />
          <Img
            objectFit="contain"
            fluid={data.circle.childImageSharp.fluid}
            alt="circle"
            className={Styles.icon}
          />
        </div>
      </div>
      <div className={Styles.videoContainer}>
        <iframe
          className={Styles.video}
          title="my video"
          src="https://www.youtube.com/embed/1bwovDOke_4"
        />
      </div>
    </div>
  )
}
