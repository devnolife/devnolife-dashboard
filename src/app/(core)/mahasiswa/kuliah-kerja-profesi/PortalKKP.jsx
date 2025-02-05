'use client'
import { useEffect, useState } from 'react'

import { useQuery } from '@apollo/client'
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Box,
  CircularProgress,
  Tab,
} from '@mui/material'
import { motion } from 'framer-motion'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import { GET_KKP_SYARAT_BY_KODE_PRODI, GET_ALL_KKP_INSTANSI_APPROVALS } from '@graphql/query'
import DetailPersyaratan from './DetailPersyaratan'
import CustomAvatar from '@core/components/mui/Avatar'
import PersyaratanKKP from './PersyaratanKKP'
import TimelineKKP from './TimelineKKP'
import ListInstansiKKP from './ListInstansiKKP'
import Confirmation from './Confirmation'
import ListHistory from './ListHistory'
import Dashboard from './Dashboard'

// Array warna untuk avatar secara acak
const colors = ["primary.light", "secondary", "success", "error.light", "warning", "info"]

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

// Flag untuk mengaktifkan halaman konfirmasi
const isConfirmationEnabled = true

export default function DashboardPage() {
  const kodeProdi = 55202
  const [persyaratan, setPersyaratan] = useState([])
  const [openDetail, setOpenDetail] = useState(false)
  const [selectedDetail, setSelectedDetail] = useState(null)
  const [instansiApprovals, setInstansiApprovals] = useState([])
  const [activeTab, setActiveTab] = useState('persyaratan')

  const [newInstansi, setNewInstansi] = useState({
    nama: '',
    alamat: '',
    keterangan: '',
    logo: ''
  })

  // Query untuk mendapatkan persyaratan KKP
  const { loading: loadingSyarat, error: errorSyarat, data: dataSyarat } = useQuery(
    GET_KKP_SYARAT_BY_KODE_PRODI,
    { variables: { kodeProdi: String(kodeProdi) } }
  )

  // Query untuk mendapatkan data instansi
  const { loading: loadingInstansi, error: errorInstansi, data: dataInstansi } = useQuery(
    GET_ALL_KKP_INSTANSI_APPROVALS
  )

  // Menangani pembukaan dialog detail persyaratan
  const handleClickOpen = (detail) => {
    setSelectedDetail(detail)
    setOpenDetail(true)
  }

  // Menutup dialog detail persyaratan
  const handleClose = () => {
    setOpenDetail(false)
    setSelectedDetail(null)
  }

  // Handler untuk upload file (jika diperlukan)
  const handleFileUpload = (event) => {
    const file = event.target.files[0]

    console.log('File yang diunggah:', file)
  }

  // Mengubah tab aktif
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  // Mengubah input untuk data instansi baru
  const handleInputChange = (e) => {
    const { name, value } = e.target

    setNewInstansi(prev => ({ ...prev, [name]: value }))
  }

  // Mengatur state persyaratan saat data query tersedia
  useEffect(() => {
    if (dataSyarat) {
      setPersyaratan(
        dataSyarat.getKkpSyaratByKodeProdi.map(item => ({
          ...item,
          file: item.is_upload_file ? 'Iya' : 'Tidak',
          aktif: item.is_activated ? 'Aktif' : 'Tidak Aktif'
        }))
      )
    }
  }, [dataSyarat])

  // Mengatur state instansi saat data query tersedia
  useEffect(() => {
    if (dataInstansi) {
      setInstansiApprovals(dataInstansi.getAllKkpInstansiApprovals)
    }
  }, [dataInstansi])

  // URL gambar statis yang ditampilkan di sisi kanan card
  const imageUrl = 'https://via.placeholder.com/80?text=Image'

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {/* Kartu Utama: Menampilkan header dan informasi dashboard */}
          <Card
            component={motion.div}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            sx={{
              position: 'relative',
              overflow: 'visible',
              p: 4,
              pr: { xs: 4, md: 12 },
            }}
          >
            {/* Gambar statis ditempatkan di sisi kanan yang melewati batas card */}
            <Box
              sx={{
                position: 'absolute',
                right: -40,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <Box
                component="img"
                src={imageUrl}
                alt="Tampilan"
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid #fff',
                  boxShadow: 3,
                }}
              />
            </Box>

            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom>
                Kuliah Kerja Profesi &amp; Plus
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Panduan dan informasi seputar pelaksanaan Kuliah Kerja Profesi &amp; Plus
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={4} mt={3}>
                <Box display="flex" alignItems="center" gap={2}>
                  <CustomAvatar color="success" variant="rounded" size={40} skin="light">
                    <i className="tabler-users" />
                  </CustomAvatar>
                  <Box>
                    <Typography variant="h6" fontWeight="600">
                      Jumlah Anggota Kelompok
                    </Typography>
                    <Typography variant="body2">
                      2 – 4 orang per kelompok
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <CustomAvatar color="warning" variant="rounded" size={40} skin="light">
                    <i className="tabler-clock" />
                  </CustomAvatar>
                  <Box>
                    <Typography variant="h6" fontWeight="600">
                      Waktu Pelaksanaan
                    </Typography>
                    <Typography variant="body2">
                      Semester Ganjil: mulai semester 7 <br />
                      Semester Genap: mulai semester 8
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Panel Tab untuk navigasi antar halaman */}
      <Box mt={4}>
        <TabContext value={activeTab}>
          <TabList
            onChange={handleTabChange}
            variant="fullWidth"
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab icon={<i className="tabler-users" />} label="Persyaratan Pengajuan KKP" value="persyaratan" />
            <Tab icon={<i className="tabler-clock" />} label="Timeline Pelaksanaan KKP" value="timeline" />
            <Tab icon={<i className="tabler-building" />} label="Daftar Instansi KKP" value="list-instansi" />
            <Tab icon={<i className="tabler-history-toggle" />} label="Riwayat Pengajuan KKP" value="history-instansi" />
            {isConfirmationEnabled && (
              <Tab icon={<i className="tabler-check" />} label="Konfirmasi" value="konfirmasi" />
            )}
          </TabList>

          <TabPanel value="persyaratan">
            {loadingSyarat ? (
              <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <CircularProgress />
              </Box>
            ) : errorSyarat ? (
              <Typography color="error">Terjadi kesalahan saat memuat data persyaratan.</Typography>
            ) : (
              <PersyaratanKKP
                persyaratan={persyaratan}
                handleClickOpen={handleClickOpen}
                getRandomColor={getRandomColor}
              />
            )}
          </TabPanel>
          <TabPanel value="timeline">
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TimelineKKP />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="list-instansi">
            {loadingInstansi ? (
              <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <CircularProgress />
              </Box>
            ) : errorInstansi ? (
              <Typography color="error">Terjadi kesalahan saat memuat data instansi.</Typography>
            ) : (
              <ListInstansiKKP
                instansiApprovals={instansiApprovals}
                getRandomColor={getRandomColor}
              />
            )}
          </TabPanel>
          <TabPanel value="history-instansi">
            <ListHistory />
          </TabPanel>
          {isConfirmationEnabled && (
            <TabPanel value="konfirmasi">
              {/* Halaman Konfirmasi: digunakan ketika ketua kelompok menambahkan data dan pengguna melakukan konfirmasi */}
              <Dashboard />
            </TabPanel>
          )}
        </TabContext>
      </Box>

      {/* Dialog untuk menampilkan detail persyaratan */}
      <DetailPersyaratan
        open={openDetail}
        handleClose={handleClose}
        selectedDetail={selectedDetail}
        handleFileUpload={handleFileUpload}
      />
    </Container>
  )
}
