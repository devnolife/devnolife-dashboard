
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Alert,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper
} from '@mui/material'

const RequirementsTab = ({
  persyaratan,
  loading,
  error,
  openDetail,
  selectedDetail,
  handleClickOpen,
  handleClose,
  handleFileUpload
}) => {
  if (loading) return <CircularProgress />
  if (error) return <Alert severity="error">Error loading requirements: {error.message}</Alert>

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>Persyaratan Kuliah Kerja Profesi</Typography>

      <Grid container spacing={3}>
        {persyaratan.map((item) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" gutterBottom>{item.nama_syarat}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {item.keterangan?.substring(0, 100)}...
                    </Typography>
                    <Typography variant="caption" display="block">Status: {item.aktif}</Typography>
                    <Typography variant="caption" display="block">Upload File: {item.file}</Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ mt: 2 }}
                      onClick={() => handleClickOpen(item)}
                    >
                      Lihat Detail
                    </Button>
                  </Box>
                  {item.is_upload_file && (
                    <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Button
                        variant="outlined"
                        component="label"
                        startIcon={<i className="tabler-upload" />}
                        size="small"
                      >
                        Upload
                        <input
                          type="file"
                          hidden
                          onChange={handleFileUpload}
                        />
                      </Button>
                    </Box>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Detail Dialog */}
      <Dialog open={openDetail} onClose={handleClose}>
        <DialogTitle>Detail Persyaratan</DialogTitle>
        <DialogContent>
          {selectedDetail && (
            <>
              <Typography variant="h6" gutterBottom>{selectedDetail.nama_syarat}</Typography>
              <Typography variant="body2" paragraph>{selectedDetail.keterangan}</Typography>

              <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
                <Typography variant="subtitle2">Informasi</Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Status" secondary={selectedDetail.aktif} />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText primary="Perlu Upload File" secondary={selectedDetail.file} />
                  </ListItem>
                </List>
              </Paper>

              {selectedDetail.is_upload_file && (
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    component="label"
                    startIcon={<i className="tabler-upload" />}
                  >
                    Upload File
                    <input
                      type="file"
                      hidden
                      onChange={handleFileUpload}
                    />
                  </Button>
                </Box>
              )}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Tutup</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default RequirementsTab
