import React from "react"
import Layout from "../component/layout/layout"
import Home from "../component/Home/Home"
import SEO from "../component/SEO/SEO"
export default function HomePage({ data }) {
  return (
    <Layout>
      <SEO siteTitle="Pranjal's Portfolio" />
      <Home data={data} />
    </Layout>
  )
}

export const query = graphql`
  query {
    sign: file(relativePath: { eq: "home/Signature_of_Andrew_Scheer.webp" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lady: file(relativePath: { eq: "home/coco_rocha23.png" }) {
      childImageSharp {
        fluid(cropFocus: CENTER, maxHeight: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    deadpool: file(relativePath: { eq: "home/deadpool.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    metropolis: file(relativePath: { eq: "home/Metropolis6.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    batman: file(relativePath: { eq: "home/batman.webp" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
