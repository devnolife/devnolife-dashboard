import dynamic from 'next/dynamic';

import Grid from '@mui/material/Grid2';
import { Divider } from '@mui/material';

const KalenderAkademik = dynamic(() => import('@/views/mahasiswa/akademik/kalender/KalenderAkademik'))
const CardAkademik = dynamic(() => import('@/views/mahasiswa/akademik/quick-actions/CardAkademik'))
const TabMenu = dynamic(() => import('./TabMenu'))

const events = [
  { date: new Date('2025-01-30'), name: 'Final Semester' },
  { date: new Date('2023-10-20'), name: 'Sports Day' },
];

const Page = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <CardAkademik />
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />
      <Grid container spacing={3} alignItems="stretch" sx={{ marginTop: 3 }}>
        <Grid item xs={12} md={4}>
          <KalenderAkademik data={events} />
        </Grid>
      </Grid>
    </>
  );
};

export default Page;

