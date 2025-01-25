'use client';

import { useQuery, gql } from "@apollo/client"

export const GET_LAUNCHES = gql`
  query GetAllKkpInstansi {
    getAllKkpInstansi {
        id
        nama
        alamat
        logo
        keterangan
    }
  }
`

const Page = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>error(</p>

  return (
    <div>
      <h1>Launches</h1>
      <ul>
        {data.getAllKkpInstansi.map(launch => (
          <li key={launch.id}>{launch.nama}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page
