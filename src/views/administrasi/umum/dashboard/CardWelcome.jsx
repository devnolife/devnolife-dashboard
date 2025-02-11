import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const KartuSuratHariIni = ({ jumlahSurat }) => {
  return (
    <Card
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <Typography variant="h5" gutterBottom textAlign="center">
              Layanan Surat
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              gutterBottom
              textAlign="center"
            >
              Jumlah Surat yang Diajukan Hari Ini: {jumlahSurat}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: 'center' }}>
            <img
              alt="Ilustrasi Layanan Surat"
              src="/images/illustrations/characters/6.png"
              style={{
                maxWidth: '100%',
                maxHeight: '150px',
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default KartuSuratHariIni;
