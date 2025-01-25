import Grid from '@mui/material/Grid2';
import { Card, CardContent, Chip, Typography, Button } from '@mui/material';

import KalenderAkademik from './KalenderAkademik';
import PenasehatAkademikCard from './PenasehatAkademikCard';
import CardAkademik from './CardAkademik';

const dataFakultas = [
  {
    judul: 'Pengajuan Surat',
    ikonAvatar: 'tabler-icon tabler-mail',
    warna: 'primary',
    isPengajuan: true,
  },
  {
    judul: 'Pengajuan Lokasi KKP',
    ikonAvatar: 'tabler-icon tabler-map-pin',
    warna: 'secondary',
    isPengajuan: true,
  },
  {
    judul: 'Pendaftaran Seminar',
    ikonAvatar: 'tabler-icon tabler-presentation',
    warna: 'success',
    isPengajuan: true,
  },
  {
    judul: 'Bimbingan Akademik',
    ikonAvatar: 'tabler-icon tabler-user-check',
    warna: 'error',
    isPengajuan: false,
  },
];

const Page = () => {
  return (
    <>
      <Grid container spacing={3} alignItems="stretch">
        {dataFakultas.map((data, index) => (
          <Grid item xs={12} md={6} key={index}>
            <CardAkademik data={data} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        <Grid item xs={12} md={8}>
          <PenasehatAkademikCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <KalenderAkademik />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
