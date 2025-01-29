'use client'

import { useState } from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import { styled } from '@mui/material/styles'

import DialogCloseButton from '@components/dialogs/DialogCloseButton'

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.shape.borderRadius * 2,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[5],
  },
}))

const RequestSurat = ({ open, setOpen }) => {
  const [letterType, setLetterType] = useState('active')
  const [isPNS, setIsPNS] = useState(false)
  const handleClose = () => setOpen(false)

  return (
    <>
      <StyledDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        closeAfterTransition={false}
        PaperProps={{ sx: { overflow: 'visible', width: '80%', maxWidth: 'none' } }}
      >
        <DialogTitle id='customized-dialog-title'>
          <Typography variant='h5' component='span'>
            Permintaan Surat Baru
          </Typography>
          <DialogCloseButton onClick={handleClose} disableRipple>
            <i className='tabler-x' />
          </DialogCloseButton>
        </DialogTitle>
        <DialogContent>
          <Box component="form" className="space-y-4">
            <Box className="mt-1 space-y-2">
              <TextField
                select
                label="Jenis Surat"
                fullWidth
                variant="outlined"
                value={letterType}
                onChange={(e) => setLetterType(e.target.value)}
              >
                <MenuItem value="active">Surat Keterangan Aktif Studi</MenuItem>
                <MenuItem value="transcript">Transkrip Resmi</MenuItem>
                <MenuItem value="recommendation">Surat Rekomendasi</MenuItem>
              </TextField>
            </Box>
            {letterType === 'active' && (
              <Box className="space-y-2">
                <FormControlLabel
                  control={<Switch checked={isPNS} onChange={(e) => setIsPNS(e.target.checked)} />}
                  label="Orang Tua PNS"
                />
                {isPNS && (
                  <TextField
                    id="pnsFile"
                    label="Upload File"
                    type="file"
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              </Box>
            )}
            <Box className="space-y-2">
              <TextField
                id="purpose"
                label="Tujuan"
                placeholder="misalnya, Aplikasi Visa, Beasiswa"
                fullWidth
                variant="outlined"
              />
            </Box>
            <Box className="space-y-2">
              <TextField
                id="additionalInfo"
                label="Informasi Tambahan"
                placeholder="Detail spesifik yang ingin disertakan..."
                fullWidth
                multiline
                rows={4}
                variant="outlined"
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='contained'>
            Kirim Permintaan
          </Button>
        </DialogActions>
      </StyledDialog>
    </>
  )
}

export default RequestSurat
