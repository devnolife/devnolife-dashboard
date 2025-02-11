'use client'

import dynamic from 'next/dynamic'

import { useTheme } from '@mui/material/styles'

const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const donutColors = {
  sementara: '#fdd835',
  diterima: '#00d4bd',
  tertolak: '#ff6961'
}

const DonatChart = () => {
  const theme = useTheme()

  const textSecondary = 'var(--mui-palette-text-secondary)'

  const options = {
    stroke: { width: 0 },
    labels: ['Sementara', 'Diterima', 'Tertolak'],
    colors: [donutColors.sementara, donutColors.diterima, donutColors.tertolak],
    dataLabels: {
      enabled: true,
      formatter: val => `${parseInt(val, 10)}%`
    },
    legend: {
      fontSize: '13px',
      position: 'bottom',
      markers: {
        offsetX: theme.direction === 'rtl' ? 7 : -4
      },
      labels: { colors: textSecondary },
      itemMargin: {
        horizontal: 9
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '1.2rem'
            },
            value: {
              fontSize: '1.2rem',
              color: textSecondary,
              formatter: val => `${parseInt(val, 10)}`
            },
            total: {
              show: true,
              fontSize: '1.2rem',
              label: 'Keseluruhan',
              formatter: () => '100%',
              color: 'var(--mui-palette-text-primary)'
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380
          },
          legend: {
            position: 'bottom'
          }
        }
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1rem'
                  },
                  value: {
                    fontSize: '1rem'
                  },
                  total: {
                    fontSize: '1rem'
                  }
                }
              }
            }
          }
        }
      }
    ]
  }

  const series = [40, 35, 25]

  return (
    <AppReactApexCharts
      type='donut'
      width='100%'
      height={400}
      options={options}
      series={series}
    />
  )
}

export default DonatChart
