'use client'

import dynamic from 'next/dynamic'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))


const series = [
  {
    data: [50, 75, 120, 90, 140, 180, 200, 160, 130, 170, 190, 220]
  }
]

const ApexLineChart = () => {

  const divider = 'var(--mui-palette-divider)'
  const disabledText = 'var(--mui-palette-text-disabled)'

  const options = {
    chart: {
      parentHeightOffset: 0,
      zoom: { enabled: false },
      toolbar: { show: false }
    },
    colors: ['#ff9f43'],
    stroke: { curve: 'straight' },
    dataLabels: { enabled: false },
    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      colors: ['#ff9f43'],
      strokeColors: ['#fff']
    },
    grid: {
      padding: { top: -10 },
      borderColor: divider,
      xaxis: {
        lines: { show: true }
      }
    },
    tooltip: {
      custom(data) {

        return `<div class='bar-chart'>
          <span>${data.series[data.seriesIndex][data.dataPointIndex]} Surat</span>
        </div>`
      }
    },
    yaxis: {
      labels: {
        style: { colors: disabledText, fontSize: '13px' }
      }
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: divider },
      crosshairs: {
        stroke: { color: divider }
      },
      labels: {
        style: { colors: disabledText, fontSize: '13px' }
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Mei',
        'Jun',
        'Jul',
        'Agu',
        'Sep',
        'Okt',
        'Nov',
        'Des'
      ]
    }
  }

  return (
    <Card>
      <CardHeader
        title='Jumlah Surat Keluar per Bulan'
        subheader='Data Surat Keluar Selama 1 Tahun'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent>
        {/* Komponen chart yang diimport secara dinamis */}
        <AppReactApexCharts
          type='line'
          width='100%'
          height={400}
          options={options}
          series={series}
        />
      </CardContent>
    </Card>
  )
}

export default ApexLineChart
