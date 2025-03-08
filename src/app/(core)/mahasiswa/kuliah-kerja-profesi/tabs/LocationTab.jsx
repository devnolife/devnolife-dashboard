'use client'

import { useState } from 'react'

import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Box,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Alert,
  Divider,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'

const LocationTab = ({
  instansiApprovals,
  loading,
  error,
  newInstansi,
  handleInputChange
}) => {
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const [openDetailDialog, setOpenDetailDialog] = useState(false)
  const [selectedInstansi, setSelectedInstansi] = useState(null)

  const handleAddClick = () => {
    setOpenAddDialog(true)
  }

  const handleAddClose = () => {
    setOpenAddDialog(false)
  }

  const handleDetailClick = (instansi) => {
    setSelectedInstansi(instansi)
    setOpenDetailDialog(true)
  }

  const handleDetailClose = () => {
    setOpenDetailDialog(false)
    setSelectedInstansi(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit new instansi:', newInstansi)

    // Implement the actual submission logic
    handleAddClose()
  }

  if (loading) return <CircularProgress />
  if (error) return <Alert severity="error">Error loading institutions: {error.message}</Alert>

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">Lokasi Kuliah Kerja Profesi</Typography>
        <Button
          variant="contained"
          startIcon={<i className="tabler-plus" />}
          onClick={handleAddClick}
        >
          Tambah Lokasi
        </Button>
      </Box>

      <Grid container spacing={3}>
        {instansiApprovals.map((instansi) => (
          <Grid item xs={12} md={6} lg={4} key={instansi.id}>
            <Card>
              <Box sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography variant="h6" gutterBottom>{instansi.nama}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {instansi.alamat}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleDetailClick(instansi)}
                  >
                    Lihat Detail
                  </Button>
                </CardContent>
                {instansi.logo && (
                  <CardMedia
                    component="img"
                    sx={{ width: 80 }}
                    image={instansi.logo || 'https://via.placeholder.com/80?text=Logo'}
                    alt={instansi.nama}
                  />
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add New Institution Dialog */}
      <Dialog open={openAddDialog} onClose={handleAddClose} maxWidth="sm" fullWidth>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Tambah Lokasi KKP Baru</DialogTitle>
          <DialogContent>
            <TextField
              name="nama"
              label="Nama Instansi"
              fullWidth
              margin="normal"
              value={newInstansi.nama}
              onChange={handleInputChange}
              required
            />
            <TextField
              name="alamat"
              label="Alamat"
              fullWidth
              margin="normal"
              multiline
              rows={3}
              value={newInstansi.alamat}
              onChange={handleInputChange}
              required
            />
            <TextField
              name="keterangan"
              label="Keterangan"
              fullWidth
              margin="normal"
              multiline
              rows={3}
              value={newInstansi.keterangan}
              onChange={handleInputChange}
            />
            <Box sx={{ mt: 2 }}>
              <Button
                variant="outlined"
                component="label"
                startIcon={<i className="tabler-upload" />}
              >
                Upload Logo
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];

                    console.log('Logo file:', file);

                    // Handle logo upload
                  }}
                />
              </Button>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddClose}>Batal</Button>
            <Button type="submit" variant="contained">Simpan</Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Detail Institution Dialog */}
      <Dialog open={openDetailDialog} onClose={handleDetailClose} maxWidth="sm" fullWidth>
        <DialogTitle>Detail Lokasi KKP</DialogTitle>
        <DialogContent>
          {selectedInstansi && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                {selectedInstansi.logo && (
                  <Box sx={{ mr: 2 }}>
                    <img
                      src={selectedInstansi.logo || 'https://via.placeholder.com/100?text=Logo'}
                      alt={selectedInstansi.nama}
                      style={{ width: 100, height: 100, objectFit: 'contain' }}
                    />
                  </Box>
                )}
                <Typography variant="h6">{selectedInstansi.nama}</Typography>
              </Box>

              <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>Alamat</Typography>
                <Typography variant="body2">{selectedInstansi.alamat}</Typography>
              </Paper>

              {selectedInstansi.keterangan && (
                <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>Keterangan</Typography>
                  <Typography variant="body2">{selectedInstansi.keterangan}</Typography>
                </Paper>
              )}

              <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                <Button
                  variant="outlined"
                  startIcon={<i className="tabler-edit" />}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<i className="tabler-trash" />}
                >
                  Hapus
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDetailClose}>Tutup</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default LocationTab
