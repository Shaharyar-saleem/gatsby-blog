import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Header from "../components/header"
import User from "../components/userProfile"


const IndexPage = () => (
    <Layout>
      <User />
    </Layout>
)

export default IndexPage
