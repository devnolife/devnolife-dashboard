'use client'

import { useState } from 'react'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const KalenderAkademik = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const [events] = useState([
    { date: new Date('2023-10-15'), name: 'Midterm Exams' },
    { date: new Date('2023-10-20'), name: 'Sports Day' }
  ])

  function renderDayContents(day, date) {
    const hasEvent = events.some(e => e.date.toDateString() === date.toDateString())

    return (
      <>
        {day}
        {hasEvent && <span style={{ color: 'red', fontSize: '0.7rem' }}>•</span>}
      </>
    )
  }

  return (
    <Box sx={{ height: '100vh', overflow: 'auto' }}>
      <AppReactDatepicker
        inline
        selected={selectedDate}
        onChange={setSelectedDate}
        renderDayContents={(day, date) => renderDayContents(day, date)}
        boxProps={{
          className: 'flex justify-center is-full',
          sx: { '& .react-datepicker': { boxShadow: 'none !important', border: 'none !important' } }
        }}
      />
      <List>
        {events.map((event, idx) => (
          <ListItem key={idx}>
            {event.date.toDateString()} - {event.name}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default KalenderAkademik
