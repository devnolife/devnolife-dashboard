import React from 'react';

import {
  Modal,
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
  Divider,
  Chip
} from '@mui/material';

import CustomAvatar from '@core/components/mui/Avatar';

const ViewLetter = ({ open, handleClose, suratData }) => {
  const {
    nomorSurat,
    judulSurat,
    jenisSurat,
    penerima,
    kontak,
    email,
    statusSurat,
    metodePengambilan,
    avatar
  } = suratData || {};

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
    maxHeight: '90vh',
    overflowY: 'auto'
  };

  // Styling untuk ikon
  const iconStyle = {
    verticalAlign: 'middle',
    marginRight: '8px',
    fontSize: '1rem',
    color: 'rgba(0, 0, 0, 0.54)' // Warna sekunder seperti Material UI
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="view-surat-title"
      aria-describedby="view-surat-description"
    >
      <Box sx={style}>
        {/* Tombol close di pojok kanan atas */}
        <Grid container justifyContent="flex-end">
          <IconButton onClick={handleClose} aria-label="close">
            <i className="icon-tabler icon-tabler-x" style={{ fontSize: '20px' }} />
          </IconButton>
        </Grid>

        {/* Bagian header dengan avatar dan divider */}
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item>
            <CustomAvatar src={avatar} size={100} />
          </Grid>
          <Grid item sx={{ width: '100%' }}>
            <Divider>
              <Chip label="Detail Surat" />
            </Divider>
          </Grid>
        </Grid>

        {/* Tampilan detail surat */}
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
              <i className="icon-tabler icon-tabler-file-text" style={iconStyle} />
              <strong>Nomor Surat:</strong>&nbsp;{nomorSurat}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
              <i className="icon-tabler icon-tabler-heading" style={iconStyle} />
              <strong>Judul Surat:</strong>&nbsp;{judulSurat}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
              <i className="icon-tabler icon-tabler-tag" style={iconStyle} />
              <strong>Jenis Surat:</strong>&nbsp;{jenisSurat}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
              <i className="icon-tabler icon-tabler-user" style={iconStyle} />
              <strong>Penerima:</strong>&nbsp;{penerima}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
              <i className="icon-tabler icon-tabler-phone" style={iconStyle} />
              <strong>Kontak:</strong>&nbsp;{kontak}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
              <i className="icon-tabler icon-tabler-mail" style={iconStyle} />
              <strong>Email:</strong>&nbsp;{email}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
              <i className="icon-tabler icon-tabler-info-circle" style={iconStyle} />
              <strong>Status Surat:</strong>&nbsp;{statusSurat}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
              <i className="icon-tabler icon-tabler-package" style={iconStyle} />
              <strong>Metode Pengambilan:</strong>&nbsp;{metodePengambilan}
            </Typography>
          </Grid>
        </Grid>

        {/* Tombol aksi */}
        <Grid container justifyContent="flex-end" mt={3}>
          <Button variant="contained" onClick={handleClose} color="primary">
            Tutup
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ViewLetter;
