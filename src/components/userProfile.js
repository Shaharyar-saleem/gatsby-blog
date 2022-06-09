import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Card from "./card"
import { Grid, Typography } from "@mui/material"

const UserProfile = () => {
  const data = useStaticQuery(graphql`
    query {
      allIndexJson {
        edges {
          node {
            username
            email
            createdAt
            updatedAt
            profile {
              dob
              name
              about
              address
              company
            }
          }
        }
      }
    }
  `)
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h2" mt={2} align="center">
           Profile of All Users
        </Typography>
      </Grid>
      {data.allIndexJson.edges.map((user, key) => {
        return (
          <Grid item xs={4}>
            <Card
              mt={2}
              name={user.node.profile.name}
              email={user.node.email}
              userName={user.node.username}
              dob={user.node.profile.dob}
              about={user.node.profile.about}
              createdAt={new Date(user.node.createdAt).toDateString()}
              updatedAt={new Date(user.node.updatedAt).toDateString()}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default UserProfile
