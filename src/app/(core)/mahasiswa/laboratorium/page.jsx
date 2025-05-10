/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useState } from 'react'

import Grid from '@mui/material/Grid'

import SearchHeader from "@/views/mahasiswa/laboratorium/HeaderSearch"
import DashboardLab from "@/views/mahasiswa/laboratorium/Dashboard"
import laboratoryData from '@/data/laboratoryData'

const Laboratorium = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <SearchHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      </Grid>
      <Grid item xs={12}>
        <DashboardLab searchValue={searchValue} courseData={laboratoryData} />
      </Grid>
    </Grid>
  )
}

export default Laboratorium
