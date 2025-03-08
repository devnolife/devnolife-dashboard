'use client'

import { useState, useEffect } from 'react'

import { useQuery } from '@apollo/client'

// MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// Component Imports
import CustomTabList from '@core/components/mui/TabList'
import InformationTab from './tabs/InformationTab'
import RequirementsTab from './tabs/RequirementsTab'
import ApplicationTab from './tabs/ApplicationTab'
import LocationTab from './tabs/LocationTab'

// GraphQL Imports
import { GET_KKP_SYARAT_BY_KODE_PRODI, GET_ALL_KKP_INSTANSI_APPROVALS } from '@graphql/query'

const Page = () => {
  // States
  const [value, setValue] = useState('1')
  const kodeProdi = 55202
  const [persyaratan, setPersyaratan] = useState([])
  const [openDetail, setOpenDetail] = useState(false)
  const [selectedDetail, setSelectedDetail] = useState(null)
  const [instansiApprovals, setInstansiApprovals] = useState([])
  
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

  // Tab change handler
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
        Kuliah Kerja Profesi
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Kelola persyaratan dan aplikasi program KKP Anda
      </Typography>

      <TabContext value={value}>
        <CustomTabList pill='true' onChange={handleChange} aria-label='tab kkp'>
          <Tab value='1' label='Informasi' iconPosition="start" icon={<i className='tabler-info-circle' />} />
          <Tab value='2' label='Persyaratan' iconPosition="start" icon={<i className='tabler-file-check' />} />
          <Tab value='3' label='Pengajuan' iconPosition="start" icon={<i className='tabler-clipboard-list' />} />
          <Tab value='4' label='Lokasi' iconPosition="start" icon={<i className='tabler-location' />} />
        </CustomTabList>
        <TabPanel value='1'>
          <InformationTab />
        </TabPanel>
        <TabPanel value='2'>
          <RequirementsTab 
            persyaratan={persyaratan}
            loading={loadingSyarat}
            error={errorSyarat}
            openDetail={openDetail}
            selectedDetail={selectedDetail}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            handleFileUpload={handleFileUpload}
          />
        </TabPanel>
        <TabPanel value='3'>
          <ApplicationTab />
        </TabPanel>
        <TabPanel value='4'>
          <LocationTab 
            instansiApprovals={instansiApprovals}
            loading={loadingInstansi}
            error={errorInstansi}
            newInstansi={newInstansi}
            handleInputChange={handleInputChange}
          />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default Page
