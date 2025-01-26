'use client'
import { useState } from 'react';

import { Box, Card, CardHeader, Typography, List, ListItem, Divider } from '@mui/material';
import TimelineDot from '@mui/lab/TimelineDot';

import dayjs from 'dayjs';

import AppReactDatepicker from '@/libs/styles/AppReactDatepicker';
import 'dayjs/locale/id';

dayjs.locale('id');

const KalenderAkademik = ({ data }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const filteredEvents = data.filter(
    (event) =>
      event.date.getMonth() === selectedDate.getMonth() &&
      event.date.getFullYear() === selectedDate.getFullYear()
  );

  return (
    <Card
      sx={{
        p: 2,
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardHeader
        title={
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            Kalender Akademik
          </Typography>
        }
        sx={{ textAlign: 'start', pb: 2 }}
      />
      <Box
        sx={{
          mb: 3,
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <AppReactDatepicker
          inline
          selected={selectedDate}
          onChange={setSelectedDate}
          highlightDates={data.map((e) => e.date)}
          boxProps={{
            className: 'flex justify-center',
            sx: {
              '& .react-datepicker': {
                boxShadow: 'none !important',
                border: 'none !important',
              },
            },
          }}
        />
      </Box>
      <List
        sx={{
          maxHeight: '300px',
          overflowY: 'auto',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          p: 1,
        }}
      >
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, idx) => (
            <ListItem
              key={idx}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
                p: 1,
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              <TimelineDot color="success" sx={{ mr: 2 }} />
              <Typography variant="body1" sx={{ fontWeight: '500' }}>
                {dayjs(event.date).format('dddd, DD MMMM YYYY')} - {event.name}
              </Typography>
            </ListItem>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary" textAlign="center">
            Tidak ada acara untuk bulan ini.
          </Typography>
        )}
      </List>
    </Card>
  );
};

export default KalenderAkademik;
