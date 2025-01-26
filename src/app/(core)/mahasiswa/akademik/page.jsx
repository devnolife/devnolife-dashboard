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

const events = [
  { date: new Date('2025-01-30'), name: 'Final Semester' },
  { date: new Date('2023-10-20'), name: 'Sports Day' },
];

const Page = () => {
  return (
    <>
      <Grid container spacing={6} wrap="nowrap">
        {dataFakultas?.map((data, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <CardAkademik data={data} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} alignItems="stretch" sx={{ marginTop: 3 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <PenasehatAkademikCard />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <KalenderAkademik data={events} />
        </Grid>
      </Grid>
    </>
  );
};

export default Page;

