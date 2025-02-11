import { useState } from 'react'

import { TextField, Button, Box, Typography } from '@mui/material'

const AddLetter = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    nomorSurat: '',
    judulSurat: '',
    jenisSurat: '',
    penerima: '',
    kontak: '',
    metodePengambilan: ''
  })

  // Handle perubahan input
  const handleChange = e => {
    const { name, value } = e.target

    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Handle submit form
  const handleSubmit = e => {
    e.preventDefault()

    // Logika submit, misalnya panggil API atau update state global
    console.log('Data surat baru:', formData)
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant='h4' gutterBottom>
        Tambahkan Surat
      </Typography>
      <Box component='form' onSubmit={handleSubmit} sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label='Nomor Surat'
          name='nomorSurat'
          value={formData.nomorSurat}
          onChange={handleChange}
          variant='outlined'
          required
        />
        <TextField
          label='Judul Surat'
          name='judulSurat'
          value={formData.judulSurat}
          onChange={handleChange}
          variant='outlined'
          required
        />
        <TextField
          label='Jenis Surat'
          name='jenisSurat'
          value={formData.jenisSurat}
          onChange={handleChange}
          variant='outlined'
          required
        />
        <TextField
          label='Penerima'
          name='penerima'
          value={formData.penerima}
          onChange={handleChange}
          variant='outlined'
          required
        />
        <TextField
          label='Kontak'
          name='kontak'
          value={formData.kontak}
          onChange={handleChange}
          variant='outlined'
        />
        <TextField
          label='Metode Pengambilan'
          name='metodePengambilan'
          value={formData.metodePengambilan}
          onChange={handleChange}
          variant='outlined'
          required
        />
        {/* ...tambahkan field lain jika diperlukan... */}
        <Button type='submit' variant='contained' sx={{ alignSelf: 'flex-start' }}>
          Simpan
        </Button>
      </Box>
    </Box>
  )
}

export default AddLetter
