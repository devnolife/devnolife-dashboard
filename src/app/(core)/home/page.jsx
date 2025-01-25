'use client';

import { useQuery, gql } from "@apollo/client"

export const GET_LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 5) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
    }
  }
`

const Page = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Suksess gan(</p>

  return (
    <div>
      <h1>Launches</h1>
      <ul>
        {data.launches.map((launch) => (
          <li key={launch.id}>
            {launch.mission_name} ({launch.launch_site.site_name_long})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page
