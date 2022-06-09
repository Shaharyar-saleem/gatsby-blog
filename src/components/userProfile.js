import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const UserProfile = () => {
  const data = useStaticQuery(graphql`
    query {
      allIndexJson {
        edges {
          node {
            username
            email
            createdAt
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
  console.log("data fetched:", data)
  return (
    <div>
      <h1>All user profiles</h1>
      {data.allIndexJson.edges.map((user, key) => {
        return (
          <div key={key}>
            {console.log("inside data:", user.node)}
            <h4>{user.node.profile.about}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default UserProfile
