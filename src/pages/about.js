import React from "react"
import Layout from "../component/layout/layout"
import SEO from "../component/SEO/SEO"
import About from "../component/About/About"

function AboutPage({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO siteTitle="About Pranjal" />
      <About data={data} />
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    au: file(relativePath: { eq: "About/au.png" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    camera: file(relativePath: { eq: "About/camera-lens.png" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    illustrator: file(relativePath: { eq: "About/Illustrator.png" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    inDesign: file(relativePath: { eq: "About/InDesign.png" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lightRoom: file(relativePath: { eq: "About/Lightroom.png" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    premiere: file(relativePath: { eq: "About/premiere.png" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    photoShop: file(relativePath: { eq: "About/ps.png" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    circle: file(relativePath: { eq: "About/circle.png" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    xd: file(relativePath: { eq: "About/xd.png" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
