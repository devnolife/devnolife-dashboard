'use client'
import { useState } from 'react'

import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Tab
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

import LineChart from './LineChart'
import DonutChart from './DonutChart'

const KartuAnalitik = () => {
  const [tabAktif, setTabAktif] = useState('0')

  const gantiTab = (event, nilaiBaru) => {
    setTabAktif(nilaiBaru)
  }

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader
        title="Analitik"
      />
      <CardContent>
        <TabContext value={tabAktif}>
          <TabList
            variant="fullWidth"
            onChange={gantiTab}
            aria-label="tab analitik"
            sx={{ marginBottom: 2 }}
          >
            <Tab label="Tren Pengiriman" value="0" />
            <Tab label="Waktu Pemrosesan" value="1" />
            <Tab label="Distribusi Status" value="2" />
          </TabList>
          <TabPanel value="0">
            <LineChart />
          </TabPanel>
          <TabPanel value="1">
            <Box>
              <Typography variant="body1">
                Area chart untuk Waktu Pemrosesan
              </Typography>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <DonutChart />
          </TabPanel>
        </TabContext>
      </CardContent>
    </Card>
  )
}

export default KartuAnalitik
