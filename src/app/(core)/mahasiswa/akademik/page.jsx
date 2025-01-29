import dynamic from 'next/dynamic';

import Grid from '@mui/material/Grid2';

const KalenderAkademik = dynamic(() => import('@/views/mahasiswa/akademik/kalender/KalenderAkademik'))
const CardAkademik = dynamic(() => import('@/views/mahasiswa/akademik/quick-actions/CardAkademik'))
const TabMenu = dynamic(() => import('./TabMenu'))

const dataFakultas = [
  {
    jenis: 'surat',
    judul: 'Pengajuan Surat',
    ikonAvatar: 'tabler-icon tabler-mail',
    warna: 'primary',
    isPengajuan: true,
    notif: 3,
  },
  {
    judul: 'Pengajuan Lokasi KKP',
    ikonAvatar: 'tabler-icon tabler-map-pin',
    warna: 'secondary',
    isPengajuan: true,
    notif: 1,
    jenis: 'pengajuan',
  },
  {
    judul: 'Pendaftaran Seminar',
    ikonAvatar: 'tabler-icon tabler-presentation',
    warna: 'success',
    isPengajuan: true,
    notif: null,
    jenis: 'pengajuan'
  },
  {
    judul: 'Bimbingan Akademik',
    ikonAvatar: 'tabler-icon tabler-user-check',
    warna: 'error',
    isPengajuan: false,
    notif: null,
    jenis: 'bimbingan'
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
          <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
            <CardAkademik data={data} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} alignItems="stretch" sx={{ marginTop: 3 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <TabMenu />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <KalenderAkademik data={events} />
        </Grid>
      </Grid>
    </>
  );
};

export default Page;

