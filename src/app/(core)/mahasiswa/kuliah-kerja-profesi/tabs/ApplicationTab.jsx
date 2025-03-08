import { useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

const ApplicationTab = () => {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      label: 'Pengajuan Berkas',
      description: 'Berkas telah dikirimkan dan sedang dalam proses pengecekan oleh koordinator KKP.',
      date: '12 September 2023',
      status: 'completed'
    },
    {
      label: 'Verifikasi Dokumen',
      description: 'Berkas Anda sedang diverifikasi. Harap menunggu konfirmasi selanjutnya.',
      date: '14 September 2023',
      status: 'active'
    },
    {
      label: 'Penempatan KKP',
      description: 'Setelah berkas diverifikasi, Anda akan ditempatkan pada lokasi KKP yang sesuai.',
      date: '-',
      status: 'pending'
    },
    {
      label: 'Pelaksanaan KKP',
      description: 'Anda akan melaksanakan KKP di tempat yang telah ditentukan.',
      date: '-',
      status: 'pending'
    },
    {
      label: 'Penilaian dan Laporan',
      description: 'Setelah KKP selesai, Anda perlu mengumpulkan laporan dan akan mendapatkan penilaian.',
      date: '-',
      status: 'pending'
    }
  ]

  return (
    <Box>
      <Typography variant="body1" paragraph>
        Status aplikasi KKP Anda akan ditampilkan di sini. Anda dapat melihat tahap proses dan keterangan tambahan.
      </Typography>

      <Paper elevation={1} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Status Aplikasi KKP - Semester Ganjil 2023/2024
        </Typography>

        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label} completed={index < activeStep}>
              <StepLabel>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>{step.label}</Typography>
                  <Typography variant="body2" color={step.date !== '-' ? "primary" : "text.secondary"}>
                    {step.date}
                  </Typography>
                </Box>
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                {index === activeStep && (
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<i className="tabler-refresh" />}
                    >
                      Check Status
                    </Button>
                  </Box>
                )}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Paper>
    </Box>
  )
}

export default ApplicationTab
