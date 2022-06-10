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
              location {
                lat
                long
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h2" mt={2} align="center">
           Profile of All Users
        </Typography>
      </Grid>
      {data.allIndexJson.edges.map((user, key) => {
        return (
          <Grid item xs={12} md={4}>
            <Card
              mt={2}
              name={user.node.profile.name}
              email={user.node.email}
              userName={user.node.username}
              dob={user.node.profile.dob}
              about={user.node.profile.about}
              address={user.node.profile.address}
              lat={user.node.profile.location.lat}
              long={user.node.profile.location.long}
              // lat={6.84019}
              // long={79.87116}
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
