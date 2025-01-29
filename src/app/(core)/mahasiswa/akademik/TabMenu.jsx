'use client'

import { useState } from 'react'


import dynamic from 'next/dynamic'

import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

const KartuKontrol = dynamic(() => import('@/views/mahasiswa/akademik/kartu-kontrol/PenasehatAkademikCard'))
const HistorySurat = dynamic(() => import('@/views/mahasiswa/akademik/Persuratan/HistoryTable'))

const TabsFullWidth = () => {

  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList variant='fullWidth' onChange={handleChange} aria-label='full width tabs example'>
        <Tab value='1' label=' Penasehat Akademik' />
        <Tab value='2' label='Pengajuan Surat' />
        <Tab value='3' label='Tab 3' />
      </TabList>
      <TabPanel value='1'>
        <KartuKontrol />
      </TabPanel>
      <TabPanel value='2'>
        <HistorySurat />
      </TabPanel>
      <TabPanel value='3'>
        <Typography>
          Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
          carrot cake gummi bears.
        </Typography>
      </TabPanel>
    </TabContext>
  )
}

export default TabsFullWidth
