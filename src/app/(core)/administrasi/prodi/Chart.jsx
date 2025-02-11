'use client'
import { useState } from 'react'

import {
  Card,
  CardHeader,
  CardContent,
  Tabs,
  Tab,
  Box,
  Typography
} from '@mui/material'

const KartuAnalitik = () => {
  const [tabAktif, setTabAktif] = useState(0)

  const gantiTab = (event, nilaiBaru) => {
    setTabAktif(nilaiBaru)
  }

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader
        title="Analitik"

      // subheader="Tambahkan deskripsi singkat di sini jika diperlukan"
      />
      <CardContent>
        {/* Tabs untuk navigasi */}
        <Tabs
          value={tabAktif}
          onChange={gantiTab}
          aria-label="tab analitik"
          sx={{ marginBottom: 2 }}
        >
          <Tab label="Tren Pengiriman" />
          <Tab label="Waktu Pemrosesan" />
          <Tab label="Distribusi Status" />
        </Tabs>

        {/* Konten untuk setiap tab */}
        {tabAktif === 0 && (
          <Box>
            <Typography variant="body1">
              Area chart untuk Tren Pengiriman
            </Typography>
            {/* Tempatkan komponen Chart di sini */}
          </Box>
        )}
        {tabAktif === 1 && (
          <Box>
            <Typography variant="body1">
              Area chart untuk Waktu Pemrosesan
            </Typography>
            {/* Tempatkan komponen Chart di sini */}
          </Box>
        )}
        {tabAktif === 2 && (
          <Box>
            <Typography variant="body1">
              Area chart untuk Distribusi Status
            </Typography>
            {/* Tempatkan komponen Chart di sini */}
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

export default KartuAnalitik
