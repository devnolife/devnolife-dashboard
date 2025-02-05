/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useState, useEffect, useMemo } from 'react'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import TablePagination from '@mui/material/TablePagination'
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'


import { Avatar, AvatarGroup } from '@mui/material'

import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'
import TablePaginationComponent from '@components/TablePaginationComponent'
import CustomTextField from '@core/components/mui/TextField'


import tableStyles from '@core/styles/table.module.css'

const fuzzyFilter = (row, columnId, value, addMeta) => {

  const itemRank = rankItem(row.getValue(columnId), value)


  addMeta({
    itemRank
  })

  return itemRank.passed
}

const DebouncedInput = ({ value: initialValue, onChange, debounce = 500, ...props }) => {

  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)

  }, [value])

  return <CustomTextField {...props} value={value} onChange={e => setValue(e.target.value)} />
}


const columnHelper = createColumnHelper()

const dataFake = [
  {
    kelompok: 'Kelompok 1',
    mahasiswa: [
      { nama: 'Ali Rahman', avatar: '/avatars/ali.jpg' },
      { nama: 'Budi Santoso', avatar: '/avatars/budi.jpg' }
    ],
    namaInstansi: 'PT XYZ',
    jenisInstansi: 'Swasta',
    tanggalMasuk: '2024-01-10',
    tanggalKeluar: '2024-04-10'
  },
  {
    kelompok: 'Kelompok 2',
    mahasiswa: [
      { nama: 'Citra Lestari', avatar: '/avatars/citra.jpg' },
      { nama: 'Dewi Anggraini', avatar: '/avatars/dewi.jpg' }
    ],
    namaInstansi: 'Kementerian Keuangan',
    jenisInstansi: 'Pemerintah',
    tanggalMasuk: '2024-02-15',
    tanggalKeluar: '2024-05-15'
  }
]

const HistoryKKP = () => {

  const [rowSelection, setRowSelection] = useState({})

  const [data, setData] = useState(...[dataFake])
  const [globalFilter, setGlobalFilter] = useState('')
  const [jenisInstansi, setJenisInstansi] = useState('')

  const columns = useMemo(
    () => [
      columnHelper.accessor('mahasiswa', {
        header: 'Mahasiswa',
        cell: ({ row }) => (
          <AvatarGroup max={3}>
            {row.original.mahasiswa.map((mhs, index) => (
              <Avatar key={index} alt={mhs.nama} src={mhs.avatar} />
            ))}
          </AvatarGroup>
        )
      }),
      columnHelper.accessor('namaInstansi', {
        header: 'Nama Instansi',
        cell: ({ row }) => <Typography>{row.original.namaInstansi}</Typography>
      }),
      columnHelper.accessor('jenisInstansi', {
        header: 'Jenis Instansi',
        cell: ({ row }) => <Typography>{row.original.jenisInstansi}</Typography>
      }),
      columnHelper.accessor('tanggalMasuk', {
        header: 'Tanggal Masuk',
        cell: ({ row }) => <Typography>{row.original.tanggalMasuk}</Typography>
      }),
      columnHelper.accessor('tanggalKeluar', {
        header: 'Tanggal Keluar',
        cell: ({ row }) => <Typography>{row.original.tanggalKeluar}</Typography>
      })
    ],

    []
  )

  const table = useReactTable({
    data: data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      rowSelection,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 6
      }
    },
    enableRowSelection: true,

    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  useEffect(() => {
    const filteredData = dataFake?.filter(invoice => {
      return true
    })

    setData(filteredData)
  }, [dataFake, setData])

  return (
    <Card>
      <CardContent className='flex flex-wrap items-start justify-between gap-4'>
        <div className='flex items-center justify-between gap-4'>
          <div className='flex items-center gap-2'>
            <CustomTextField
              select
              value={table.getState().pagination.pageSize}
              onChange={e => table.setPageSize(Number(e.target.value))}
              className='is-[70px]'
            >
              <MenuItem value='6'>6</MenuItem>
              <MenuItem value='24'>24</MenuItem>
              <MenuItem value='50'>50</MenuItem>
            </CustomTextField>
          </div>
        </div>
        <div className='flex flex-col items-start gap-4 sm:flex-row max-sm:is-full sm:items-center'>
          <CustomTextField
            select
            value={jenisInstansi}
            className='w-[160px]'
            onChange={e => setJenisInstansi(e.target.value)}
            SelectProps={{ displayEmpty: true }}
          >
            <MenuItem value=''>Semua</MenuItem>
            <MenuItem value='Pemerintah'>Pemerintah</MenuItem>
            <MenuItem value='Swasta'>Swasta</MenuItem>
          </CustomTextField>
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Cari Data'
            className='max-sm:is-full sm:is-[250px]'
          />
        </div>
      </CardContent>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          className={classnames({
                            'flex items-center': header.column.getIsSorted(),
                            'cursor-pointer select-none': header.column.getCanSort()
                          })}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: <i className='text-xl tabler-chevron-up' />,
                            desc: <i className='text-xl tabler-chevron-down' />
                          }[header.column.getIsSorted()] ?? null}
                        </div>
                      </>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {table.getFilteredRowModel().rows.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                  Tidak ada data tersedia
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, table.getState().pagination.pageSize)
                .map(row => {
                  return (
                    <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                      ))}
                    </tr>
                  )
                })}
            </tbody>
          )}
        </table>
      </div>
      <TablePagination
        component={() => <TablePaginationComponent table={table} />}
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={table.getState().pagination.pageSize}
        page={table.getState().pagination.pageIndex}
        onPageChange={(_, page) => {
          table.setPageIndex(page)
        }}
        onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
      />
    </Card>
  )
}

export default HistoryKKP
