// Setting.jsx

'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Typography from '@mui/material/Typography'

// Komponen custom untuk menampung list Tab
// (Sesuaikan path import dengan proyek Anda)
import CustomTabList from '@core/components/mui/TabList'

const Settings = ({ tabContentList }) => {
  // Tentukan tab mana yang akan aktif pertama kali
  // misalnya: "jenis-surat"
  const [activeTab, setActiveTab] = useState('jenis-surat')

  // Handler ketika tab diganti
  const handleChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  return (
    <TabContext value={activeTab}>
      <Grid container spacing={6}>
        {/* Sisi Kiri: Daftar Tab */}
        <Grid item xs={12} md={4}>
          <Typography variant='h5' sx={{ marginBottom: 4 }}>
            Getting Started
          </Typography>
          <CustomTabList
            orientation='vertical'
            onChange={handleChange}
            className='is-full'
            pill='true'
          >
            {/* Tab 1 */}
            <Tab
              label='Jenis Surat'
              icon={<i className='tabler-file-description' />}
              iconPosition='start'
              value='jenis-surat'
              className='flex-row justify-start !min-is-full'
            />

            {/* Tab 2 */}
            <Tab
              label='Tujuan Surat'
              icon={<i className='tabler-mail-forward' />}
              iconPosition='start'
              value='tujuan-surat'
              className='flex-row justify-start !min-is-full'
            />

            {/* Tab 3 */}
            <Tab
              label='Masalah Surat'
              icon={<i className='tabler-alert-circle' />}
              iconPosition='start'
              value='masalah-surat'
              className='flex-row justify-start !min-is-full'
            />

            {/* Tab 4 */}
            <Tab
              label='Ketentuan Surat'
              icon={<i className='tabler-list-check' />}
              iconPosition='start'
              value='ketentuan-surat'
              className='flex-row justify-start !min-is-full'
            />

            {/* Tab 5 */}
            <Tab
              label='Profile Admin'
              icon={<i className='tabler-user-circle' />}
              iconPosition='start'
              value='profile-admin'
              className='flex-row justify-start !min-is-full'
            />
          </CustomTabList>
        </Grid>

        {/* Sisi Kanan: Konten Tab */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              {/* Panel untuk Jenis Surat */}
              <TabPanel value='jenis-surat' className='p-0'>
                {tabContentList['jenis-surat']}
              </TabPanel>
              {/* Panel untuk Tujuan Surat */}
              <TabPanel value='tujuan-surat' className='p-0'>
                {tabContentList['tujuan-surat']}
              </TabPanel>
              {/* Panel untuk Masalah Surat */}
              <TabPanel value='masalah-surat' className='p-0'>
                {tabContentList['masalah-surat']}
              </TabPanel>
              {/* Panel untuk Ketentuan Surat */}
              <TabPanel value='ketentuan-surat' className='p-0'>
                {tabContentList['ketentuan-surat']}
              </TabPanel>
              {/* Panel untuk Profile Admin */}
              <TabPanel value='profile-admin' className='p-0'>
                {tabContentList['profile-admin']}
              </TabPanel>
            </Grid>

            {/* Tombol Save & Discard */}
            <Grid item xs={12}>
              <div style={{ display: 'flex', justifyContent: 'end', gap: '16px' }}>
                <Button variant='tonal' color='secondary'>
                  Discard
                </Button>
                <Button variant='contained'>
                  Save Changes
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </TabContext>
  )
}

export default Settings
