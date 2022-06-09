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
    <div>
      <h1>All user profiles</h1>
      <table>
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>User Name</th>
              <th>DOB</th>
              <th>Created At</th>
              <th>Updated At</th>
          </tr>
      {data.allIndexJson.edges.map((user, key)=>{
          console.log("inside:", user.node)
        return(
            <tr key={key}>
                <td>{user.node.profile.name}</td>
                <td>{user.node.email}</td>
                <td>{user.node.username}</td>
                <td>{user.node.profile.dob}</td>
                <td>{new Date(user.node.createdAt).toDateString()}</td>
                <td>{new Date(user.node.updatedAt).toDateString()}</td>

            </tr>
        ) 
      })}
       </table>
    </div>
  )
}

export default UserProfile
