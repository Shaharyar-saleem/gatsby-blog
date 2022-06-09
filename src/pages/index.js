import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Header from "../components/header"
import User from "../components/userProfile"
import {Container} from "@mui/material"


const IndexPage = () => (
    <Layout>
      <Container maxWidth="lg">
        <User />
      </Container>
    </Layout>
)

export default IndexPage
