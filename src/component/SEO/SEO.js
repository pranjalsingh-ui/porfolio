import React from "react"
import Helmet from "react-helmet"
import siteInfo from "../../assets/config/seoConfig.js"

export default function SEO({ siteTitle }) {
  return (
    <Helmet
      title={siteTitle}
      meta={[
        { charSet: "utf-8" },
        { name: "description", content: siteInfo.description },
        {
          name: "keywords",
          content: siteInfo.keywords,
        },
        { name: "image", content: siteInfo.image },
        {
          name: "google-site-verification",
          content: siteInfo["google-site-verification"],
        },

        // Google / Search Engine Tags
        { itemprop: "name", content: siteInfo.googleName },
        { itemprop: "description", content: siteInfo.googleDescription },
        { itemprop: "image", content: siteInfo.googleImage },
        {name="google-site-verification", content="c_SFLCk5DarGwY80aaq8_y5xg45iVLP9xUyWWqtErew"},

        // Facebook Meta Tags
        { property: "og:url", content: siteInfo.ogUrl },
        { property: "og:type", content: siteInfo.ogType },
        { property: "og:title", content: siteTitle },
        { property: "og:description", content: siteInfo.ogDescription },
        { property: "og:image", content: siteInfo.ogImage },

        // Twitter Meta Tags
        { name: "twitter:card", content: siteInfo.twitterCard },
        { name: "twitter:title", content: siteTitle },
        { name: "twitter:description", content: siteInfo.twitterDescription },
        { name: "twitter:image", content: siteInfo.twitterImage },
        { name: "twitter:image:alt", content: siteInfo.twitterImageAlt },
      ]}
    >
      <html lang="en" />
    </Helmet>
  )
}
