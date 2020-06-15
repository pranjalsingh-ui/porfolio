import React from "react"
import Layout from "../component/layout/layout"
import { Link } from "gatsby"
import SEO from "../component/SEO/SEO"

function ErrorPage() {
  return (
    <Layout>
      <SEO siteTitle="Page Not Found" />
      <div style={{ textAlign: "center" }}>
        <h1>404 - Oh Snap</h1>
        <h2>
          Couldn't find the page !!!
          <br />
          Chewie will guide you <Link href="/">Home</Link>
        </h2>
      </div>
    </Layout>
  )
}

export default ErrorPage
