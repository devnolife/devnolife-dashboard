'use client'


import { useState, useEffect, useMemo } from 'react'


import Link from 'next/link'
import { useParams } from 'next/navigation'


import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import TablePagination from '@mui/material/TablePagination'


import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues
} from '@tanstack/react-table'


import TablePaginationComponent from '@components/TablePaginationComponent'
import CustomTextField from '@core/components/mui/TextField'


import tableStyles from '@core/styles/table.module.css'

const dataFake = [
  {
    id: 1,
    jenisSurat: 'aktif-kuliah',
    tanggalPengajuan: '2025-02-01',
    tanggalKeluar: '2025-02-02',
    status: 'Menunggu Approval'
  },
  {
    id: 2,
    jenisSurat: 'beasiswa',
    tanggalPengajuan: '2025-01-20',
    tanggalKeluar: '2025-01-22',
    status: 'Disetujui'
  },
  {
    id: 3,
    jenisSurat: 'permohonan-bank',
    tanggalPengajuan: '2025-01-18',
    tanggalKeluar: '2025-01-19',
    status: 'Menunggu Approval'
  },
  {
    id: 4,
    jenisSurat: 'surat-kkp',
    tanggalPengajuan: '2025-02-05',
    tanggalKeluar: '2025-02-06',
    status: 'Ditolak'
  },
  {
    id: 5,
    jenisSurat: 'surat-ujian',
    tanggalPengajuan: '2025-02-03',
    tanggalKeluar: '2025-02-04',
    status: 'Menunggu Approval'
  }
]


const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)

  addMeta({ itemRank })

  return itemRank.passed
}


const DebouncedInput = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => onChange(value), debounce)


    return () => clearTimeout(timeout)
  }, [value, onChange, debounce])

  return <CustomTextField {...props} value={value} onChange={e => setValue(e.target.value)} />
}


const columnHelper = createColumnHelper()

const HistorySuratTable = ({ suratData }) => {

  const [jenisSuratFilter, setJenisSuratFilter] = useState('')
  const [data, setData] = useState(suratData || [])
  const [filteredData, setFilteredData] = useState(data)
  const [globalFilter, setGlobalFilter] = useState('')



  const columns = useMemo(
    () => [

      columnHelper.accessor('id', {
        header: 'No Surat',
        cell: info => <Typography>{`#${info.getValue()}`}</Typography>
      }),


      columnHelper.accessor('jenisSurat', {
        header: 'Jenis Surat',
        cell: info => {
          const val = info.getValue()

          return <Typography
            sx={{ textTransform: 'capitalize' }}>{val.replace('-', ' ')}</Typography>
        }
      }),


      columnHelper.accessor('tanggalPengajuan', {
        header: 'Tanggal Pengajuan',
        cell: info => <Typography>{info.getValue()}</Typography>
      }),


      columnHelper.accessor('tanggalKeluar', {
        header: 'Tanggal Keluar',
        cell: info => <Typography>{info.getValue()}</Typography>
      }),


      columnHelper.accessor('status', {
        header: 'Status',
        cell: info => {
          const val = info.getValue()

          // Updated random color selection for Chip
          const randomColors = ['warning', 'success', 'secondary', 'primary', 'error']
          const statusColor = randomColors[Math.floor(Math.random() * randomColors.length)]


          return <Chip label={val} color={statusColor} size="small" variant="tonal" />
        }
      }),


      columnHelper.display({
        id: 'action',
        header: 'Action',
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <IconButton
              onClick={() => {
                const idToRemove = row.original.id

                setData(prev => prev.filter(surat => surat.id !== idToRemove))
              }}
            >
              <i className="tabler-trash text-textSecondary" />
            </IconButton>
            <IconButton>
              <Link href="/" className="flex">
                <i className="tabler-eye text-textSecondary" />
              </Link>
            </IconButton>
          </div>
        )
      })
    ],
    []
  )


  const table = useReactTable({
    data: filteredData,
    columns,
    filterFns: { fuzzy: fuzzyFilter },
    state: { globalFilter },
    initialState: { pagination: { pageSize: 10 } },
    globalFilterFn: fuzzyFilter,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })


  useEffect(() => {
    if (!jenisSuratFilter) {
      setFilteredData(data)
    } else {
      setFilteredData(data.filter(item => item.jenisSurat === jenisSuratFilter))
    }
  }, [jenisSuratFilter, data])

  return (
    <Card>
      <CardContent className="flex flex-col items-start justify-between gap-4 md:items-center md:flex-row">
        {/* Bagian kiri: Pengaturan page size dan tombol buat surat */}
        <div className="flex flex-col items-center justify-between w-full gap-4 sm:flex-row sm:w-auto">
          <div className="flex items-center w-full gap-2 sm:w-auto">
            <Typography className="hidden sm:block">Show</Typography>
            <CustomTextField
              select
              value={table.getState().pagination.pageSize}
              onChange={e => table.setPageSize(Number(e.target.value))}
              className="w-[70px] sm:w-[70px]"
            >
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="25">25</MenuItem>
              <MenuItem value="50">50</MenuItem>
            </CustomTextField>
          </div>
          <Button
            variant="contained"
            component={Link}
            startIcon={<i className="tabler-plus" />}
            href="/buat-surat"
            className="w-full sm:whitespace-nowrap sm:w-auto"
          >
            Buat Surat
          </Button>
        </div>

        {/* Bagian kanan: Pencarian dan filter jenis surat */}
        <div className="flex flex-col w-full gap-4 sm:flex-row sm:items-center sm:w-auto">
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder="Cari Surat"
            className="w-full sm:w-[250px]"
          />
          <CustomTextField
            select
            id="select-jenis-surat"
            value={jenisSuratFilter}
            onChange={e => setJenisSuratFilter(e.target.value)}
            className="w-full sm:w-[180px]"
            slotProps={{ select: { displayEmpty: true } }}
          >
            <MenuItem value="">Semua Jenis Surat</MenuItem>
            <MenuItem value="aktif-kuliah">Aktif Kuliah</MenuItem>
            <MenuItem value="beasiswa">Beasiswa</MenuItem>
            <MenuItem value="permohonan-bank">Permohonan Bank</MenuItem>
            <MenuItem value="surat-kkp">Surat KKP</MenuItem>
            <MenuItem value="surat-ujian">Surat Ujian</MenuItem>
          </CustomTextField>
        </div>
      </CardContent>

      {/* Tabel Data */}
      <div className="overflow-x-auto">
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={classnames({
                          'flex items-center': header.column.getIsSorted(),
                          'cursor-pointer select-none': header.column.getCanSort()
                        })}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: <i className="text-xl tabler-chevron-up" />,
                          desc: <i className="text-xl tabler-chevron-down" />
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {table.getFilteredRowModel().rows.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={table.getVisibleFlatColumns().length} className="text-center">
                  Tidak ada data
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, table.getState().pagination.pageSize)
                .map(row => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          )}
        </table>
      </div>

      {/* Komponen Pagination */}
      <TablePagination
        component={() => <TablePaginationComponent table={table} />}
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={table.getState().pagination.pageSize}
        page={table.getState().pagination.pageIndex}
        onPageChange={(_, page) => table.setPageIndex(page)}
        onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
      />
    </Card>
  )
}

export default function PageHistorySurat() {
  return <HistorySuratTable suratData={dataFake} />
}
