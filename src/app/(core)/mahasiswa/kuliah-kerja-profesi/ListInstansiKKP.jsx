import { useState } from 'react'

import { Grid, Card, CardContent, Chip, Typography, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material'
import { motion } from 'framer-motion'

import CustomAvatar from '@core/components/mui/Avatar'

export default function ListInstansiKKP({ instansiApprovals, getRandomColor }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const filteredInstansiApprovals = instansiApprovals.filter(item => {
    const nameMatch = item.kkpInstansi.nama.toLowerCase().includes(searchTerm.toLowerCase())

    const statusMatch =
      statusFilter === 'All' ||
      (statusFilter === 'Terdaftar' && item.kkpInstansi.is_activated) ||
      (statusFilter === 'Tidak Aktif' && !item.kkpInstansi.is_activated)


    return nameMatch && statusMatch
  })

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {/* <Grid item xs={12} sm={6}>
          <Card>
            <TextField
              label="Cari Instansi"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={statusFilter}
              label="Status"
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <MenuItem value="All">Semua</MenuItem>
              <MenuItem value="Terdaftar">Terdaftar</MenuItem>
              <MenuItem value="Tidak Aktif">Tidak Aktif</MenuItem>
            </Select>
          </FormControl>
        </Grid> */}
      </Grid>

      <Grid container spacing={4}>
        {filteredInstansiApprovals.map((item, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={idx}
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
          >
            <Card
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{
                height: '100%', display: 'flex', flexDirection: 'column',
                boxShadow: 3, borderRadius: 2, overflow: 'hidden',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.02)' },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
                  <Grid item>
                    <CustomAvatar
                      color={getRandomColor()}
                      variant="rounded"
                      size={90}
                      skin="light"
                      sx={{ mb: 2 }}
                    >
                      <i className={item.kkpInstansi.logo} />
                    </CustomAvatar>
                  </Grid>
                  <Grid item>
                    <Chip
                      variant="outlined"
                      label={item.kkpInstansi.is_activated ? 'Terdaftar' : 'Tidak Aktif'}
                      color={item.kkpInstansi.is_activated ? 'success' : 'error'}
                      size="small"
                      sx={{ mb: 1 }}
                    />
                  </Grid>
                  <Grid item textAlign="center">
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      {item.kkpInstansi.nama}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {item.kkpInstansi.alamat}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.kkpInstansi.keterangan}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
