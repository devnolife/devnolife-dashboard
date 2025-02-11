'use client'

import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'

// Styled Timeline agar tidak menampilkan garis di sisi kiri
const Timeline = styled(MuiTimeline)({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

const RecentActity = () => {
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader title="Recent Activity" />
      <CardContent>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography className='font-medium' color='text.primary'>
                  10 Surat Keluar Telah Dikirim
                </Typography>
                <Typography variant='caption'>12 menit yang lalu</Typography>
              </div>
              <Typography className='mbe-0'>
                Seluruh surat telah berhasil dikirim ke penerima.
              </Typography>
              <div className='flex items-center gap-2.5 is-fit rounded bg-actionHover plb-[5px] pli-2.5'>
                <img height={20} alt='lampiran.pdf' src='/images/icons/pdf-document.png' />
                <Typography className='font-medium'>surat_keluar.pdf</Typography>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='success' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography className='font-medium' color='text.primary'>
                  Surat Masuk Baru Diterima
                </Typography>
                <Typography variant='caption'>45 menit yang lalu</Typography>
              </div>
              <Typography className='mbe-2'>
                Surat masuk dari Bapak Joko terkait permohonan kerjasama.
              </Typography>
              <div className='flex items-center gap-2.5'>
                <Avatar src='/images/avatars/2.png' className='is-8 bs-8' />
                <div className='flex flex-col flex-wrap'>
                  <Typography variant='body2' className='font-medium'>
                    Bapak Joko (Pengirim)
                  </Typography>
                  <Typography variant='body2'>Bagian Kerjasama</Typography>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='info' />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography className='font-medium' color='text.primary'>
                  Memo Internal Baru Dibuat
                </Typography>
                <Typography variant='caption'>2 hari yang lalu</Typography>
              </div>
              <Typography className='mbe-0'>
                Memo internal ini melibatkan 6 anggota tim.
              </Typography>
              <AvatarGroup total={6} className='pull-up'>
                <Avatar alt='Siti' src='/images/avatars/2.png' />
                <Avatar alt='Agus' src='/images/avatars/4.png' />
                <Avatar alt='Dewi' src='/images/avatars/5.png' />
              </AvatarGroup>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default RecentActity
