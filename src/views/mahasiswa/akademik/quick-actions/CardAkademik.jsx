'use client'

import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Grid, Card, CardContent, Typography, Box } from '@mui/material'

const CardAkademik = () => {
  const router = useRouter()

  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s ease-in-out',
    ':hover': {
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    },
    px: 4,
    py: 4,
    borderRadius: 2,
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    height: '100%'
  }

  return (
    <Grid container spacing={3} alignItems="stretch">
      {/* Card 1 */}
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            ...cardStyle,
            backgroundColor: '#FCECEC'
          }}
          onClick={() => router.push('/halaman-surat')}
        >
          <CardContent
            sx={{
              p: 0,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Permohonan Surat
            </Typography>
          </CardContent>

          <Box
            sx={{
              position: 'relative',
              width: 90,
              height: 90,
              flexShrink: 0,
              ml: 3
            }}
          >
            <Image
              src="/images/mahasiswa/akademik/surat.png"
              alt="Permohonan Surat"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            ...cardStyle,
            backgroundColor: '#F7F0FF'
          }}
          onClick={() => router.push('/halaman-ujian')}
        >
          <CardContent
            sx={{
              p: 0,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Permohonan Ujian
            </Typography>
          </CardContent>

          <Box
            sx={{
              position: 'relative',
              width: 90,
              height: 90,
              flexShrink: 0,
              ml: 3
            }}
          >
            <Image
              src="/images/mahasiswa/akademik/ujian.png"
              alt="Permohonan Ujian"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Card>
      </Grid>

      {/* Card 3 */}
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            ...cardStyle,
            backgroundColor: '#E5F6EB'
          }}
          onClick={() => router.push('/halaman-bimbingan')}
        >
          <CardContent
            sx={{
              p: 0,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Permohonan Bimbingan
            </Typography>
          </CardContent>

          <Box
            sx={{
              position: 'relative',
              width: 90,
              height: 90,
              flexShrink: 0,
              ml: 3
            }}
          >
            <Image
              src="/images/mahasiswa/akademik/bimbingan.png"
              alt="Permohonan Bimbingan"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Card>
      </Grid>

      {/* Card 4 */}
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            ...cardStyle,
            backgroundColor: '#eff6ff'
          }}
          onClick={() => router.push('/halaman-library')}
        >
          <CardContent
            sx={{
              p: 0,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Akses ke Perpustakaan
            </Typography>
          </CardContent>

          <Box
            sx={{
              position: 'relative',
              width: 90,
              height: 90,
              flexShrink: 0,
              ml: 3
            }}
          >
            <Image
              src="/images/mahasiswa/akademik/library.png"
              alt="E-Library"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CardAkademik
