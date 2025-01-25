'use client'

import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import './print.css'

import PreviewCard from './PreviewCard'

const Preview = ({ mahasiswa, data, semester, onSemesterChange, signature }) => {
  const handlePrint = () => {
    console.log(`Printing for ${semester}`)
    window.print()
  }

  const handleDownload = () => {
    console.log(`Downloading for ${semester}`)
    alert(`Download initiated for ${semester}`)
  }

  return (
    <Grid>
      <CardContent className="flex flex-col gap-1">
        <div className="flex items-center justify-between mb-4">
          <Select
            size="small"
            value={semester}
            onChange={(e) => onSemesterChange(e.target.value)}
            variant="outlined"
            className="w-1/3"
          >
            <MenuItem value="Semester 1">Semester 1</MenuItem>
            <MenuItem value="Semester 2">Semester 2</MenuItem>
            <MenuItem value="Semester 3">Semester 3</MenuItem>
            <MenuItem value="Semester 4">Semester 4</MenuItem>
            <MenuItem value="Semester 5">Semester 5</MenuItem>
            <MenuItem value="Semester 6">Semester 6</MenuItem>
            <MenuItem value="Semester 7">Semester 7</MenuItem>
            <MenuItem value="Semester 8">Semester 8</MenuItem>
          </Select>

          <div className="flex gap-2">
            <Button
              onClick={handlePrint}
              variant="contained"
              color="primary"
              sx={{ textTransform: 'capitalize' }}
            >
              Print
            </Button>
            <Button
              onClick={handleDownload}
              variant="outlined"
              color="secondary"
              sx={{ textTransform: 'capitalize' }}
            >
              Download
            </Button>
          </div>
        </div>
        <PreviewCard
          data={data}
          signature={signature}
          mahasiswa={mahasiswa}
        />
      </CardContent>
    </Grid>
  )
}

export default Preview
