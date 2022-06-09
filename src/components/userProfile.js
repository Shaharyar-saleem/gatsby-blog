import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function userProfile({data}) {
  return (
    <div>
      <h1>All user profiles</h1>
      {data}
    </div>
  );
}

// export const data = useStaticQuery(graphql`
// query{
//   allIndexJson {
//     edges {
//       node {
//         username
//         email
//         createdAt
//         profile {
//           dob
//           name
//           about
//           address
//           company
//         }
//       }
//     }
//   }
// }
// `)


