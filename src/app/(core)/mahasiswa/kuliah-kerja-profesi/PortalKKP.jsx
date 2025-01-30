/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useEffect, useState } from 'react'

import { useQuery } from '@apollo/client'


import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Chip,
  TextField,
  Box,
  CardMedia,
  CircularProgress
} from '@mui/material'

import { toast } from 'react-toastify'

import { motion } from 'framer-motion'

import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import { GET_KKP_SYARAT_BY_KODE_PRODI, GET_ALL_KKP_INSTANSI_APPROVALS } from '@graphql/query'

import DetailPersyaratan from './DetailPersyaratan'
import CustomAvatar from '@core/components/mui/Avatar'

import PersyaratanKKP from './PersyaratanKKP'
import TimelineKKP from './TimelineKKP'
import ListInstansiKKP from './ListInstansiKKP'
import AjukanInstansi from './AjukanInstansi'

const colors = ["primary.light", "secondary", "success", "error.light", "warning", "info"];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function DashboardPage() {
  const kodeProdi = 55202
  const [persyaratan, setPersyaratan] = useState([])
  const [open, setOpen] = useState(false)
  const [selectedDetail, setSelectedDetail] = useState(null)
  const [instansiApprovals, setInstansiApprovals] = useState([])
  const [activeTab, setActiveTab] = useState('persyaratan')
  const [loading, setLoading] = useState(false)

  const [newInstansi, setNewInstansi] = useState({
    nama: '',
    alamat: '',
    keterangan: '',
    logo: ''
  })

  const { loading: loadingSyarat, error: errorSyarat, data: dataSyarat } = useQuery(
    GET_KKP_SYARAT_BY_KODE_PRODI,
    { variables: { kodeProdi: String(kodeProdi) } }
  )

  const { loading: loadingInstansi, error: errorInstansi, data: dataInstansi } = useQuery(
    GET_ALL_KKP_INSTANSI_APPROVALS
  )

  const handleClickOpen = (detail) => {
    setSelectedDetail(detail)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedDetail(null)
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]

    console.log('Uploaded file:', file)

  }

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setNewInstansi(prev => ({ ...prev, [name]: value }))
  }

  const handleLogoUpload = (file) => {
    // Implement file handling logic
  }

  const handleSubmit = () => {
    // Implement submission logic
  }

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

  useEffect(() => {
    if (dataInstansi) {
      setInstansiApprovals(dataInstansi.getAllKkpInstansiApprovals)
    }
  }, [dataInstansi])

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            Kuliah Kerja Profesi & Plus
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Panduan dan informasi terkait kuliah kerja profesi dan kuliah kerja profesi plus
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              maxWidth: "100%",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card
            component={motion.div}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            sx={{ maxWidth: '100%', p: 2 }}
          >
            <CardContent sx={{ padding: 4 }} className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CustomAvatar color="success" variant="rounded" size={40} skin="light">
                  <i className="tabler-users" />
                </CustomAvatar>
                <div>
                  <Typography variant="h6" className="font-semibold">
                    Jumlah Anggota
                  </Typography>
                  <Typography variant="body2">2–4 orang per kelompok</Typography>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CustomAvatar color="warning" variant="rounded" size={40} skin="light">
                  <i className="tabler-clock" />
                </CustomAvatar>
                <div>
                  <Typography variant="h6" className="font-semibold">
                    Waktu Pelaksanaan
                  </Typography>
                  <Typography variant="body2">
                    Semester Ganjil: mulai semester 7 <br />
                    Semester Genap: mulai semester 8
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <TabContext value={activeTab}>
        <TabList onChange={handleTabChange} variant='fullWidth'>
          <Tab icon={<i className='tabler-users' />} label='Persyaratan KKP' value='persyaratan' />
          <Tab icon={<i className='tabler-clock' />} label='Timeline KKP' value='timeline' />
          <Tab icon={<i className='tabler-building' />} label='List Instansi KKP' value='list-instansi' />
          <Tab icon={<i className='tabler-plus' />} label='Ajukan Instansi Baru' value='ajukan-instansi' />
        </TabList>
        <TabPanel value='persyaratan'>
          {loading
            ? (
              <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <CircularProgress />
              </Box>
            )
            : (
              <PersyaratanKKP
                persyaratan={persyaratan}
                handleClickOpen={handleClickOpen}
                getRandomColor={getRandomColor}
              />
            )
          }
        </TabPanel>
        <TabPanel value='timeline'>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>Timeline KKP</Typography>
                  <TimelineKKP />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value='list-instansi'>
          <Grid container spacing={4}>
            {instansiApprovals.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 3,
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.02)' },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Grid
                      container
                      spacing={2}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
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
        </TabPanel>
        <TabPanel value='ajukan-instansi'>
          <AjukanInstansi
            newInstansi={newInstansi}
            handleInputChange={handleInputChange}
            handleLogoUpload={handleLogoUpload}
            handleSubmit={handleSubmit}
          />
        </TabPanel>
      </TabContext>

      <DetailPersyaratan
        open={open}
        handleClose={handleClose}
        selectedDetail={selectedDetail}
        handleFileUpload={handleFileUpload}
      />
    </Container>
  )
}
