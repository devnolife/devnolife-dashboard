'use client'
import { useState, useMemo } from 'react'

import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import { createColumnHelper } from '@tanstack/react-table'

import { Checkbox, Typography } from '@mui/material'
import Drawer from '@mui/material/Drawer'

import DataTable from '@components/DataTable'
import ViewLetter from './ViewLetter'
import OptionMenu from '@core/components/option-menu'
import { getInitials } from '@/utils/getInitials'
import CustomAvatar from '@core/components/mui/Avatar'
import AddLetter from './AddLetter'

const statusColor = {
  Diproses: 'warning',
  'Menunggu persetujuan': 'info',
  Disetujui: 'success'
}

const columnHelper = createColumnHelper()

const TableLetter = ({ db }) => {
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [data, setData] = useState(db)
  const [viewSuratOpen, setViewSuratOpen] = useState(false)
  const [selectedSurat, setSelectedSurat] = useState(null)

  const handleViewSurat = surat => {
    setSelectedSurat(surat)
    setViewSuratOpen(true)
  }

  const getAvatar = params => {
    const { avatar, pengaju } = params

    if (avatar) {
      return <CustomAvatar src={avatar} size={34} />
    } else {
      return <CustomAvatar size={34}>{getInitials(pengaju || '')}</CustomAvatar>
    }
  }

  const columns = useMemo(
    () => [
      columnHelper.accessor('nomorSurat', {
        header: 'Nomor Surat',
        cell: ({ row }) => (
          <Typography color='text.primary' className='font-medium'>
            {row.original.nomorSurat}
          </Typography>
        )
      }),
      columnHelper.accessor('judulSurat', {
        header: 'Judul Surat',
        cell: ({ row }) => (
          <Typography color='text.primary' className='font-medium'>
            {row.original.judulSurat}
          </Typography>
        )
      }),
      columnHelper.accessor('jenisSurat', {
        header: 'Jenis Surat',
        cell: ({ row }) => (
          <Typography color='text.primary' className='capitalize'>
            {row.original.jenisSurat}
          </Typography>
        )
      }),
      columnHelper.accessor('pengaju', {
        header: 'pengaju',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            {getAvatar({ avatar: row.original.avatar, pengaju: row.original.pengaju })}
            <div className='flex flex-col'>
              <Typography color='text.primary' className='font-medium'>
                {row.original.pengaju}
              </Typography>
              <Typography variant='body2'>{row.original.kontak}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('statusSurat', {
        header: 'Status Surat',
        cell: ({ row }) => (
          <Chip
            variant='tonal'
            label={row.original.statusSurat}
            size='small'
            color={statusColor[row.original.statusSurat]}
            className='capitalize'
          />
        )
      }),
      columnHelper.accessor('action', {
        header: 'Action',
        cell: ({ row }) => (
          <div className='flex items-center'>
            <IconButton onClick={() => handleViewSurat(row.original)}>
              <i className='tabler-eye text-textSecondary' />
            </IconButton>
            <IconButton onClick={() => setData(data?.filter(surat => surat.id !== row.original.id))}>
              <i className='tabler-trash text-textSecondary' />
            </IconButton>
            <OptionMenu
              iconButtonProps={{ size: 'medium' }}
              iconClassName='text-textSecondary'
              options={[
                {
                  text: 'Download',
                  icon: 'tabler-download',
                  menuItemProps: { className: 'flex items-center gap-2 text-textSecondary' }
                },
                {
                  text: 'Edit',
                  icon: 'tabler-edit',
                  menuItemProps: { className: 'flex items-center gap-2 text-textSecondary' }
                }
              ]}
            />
          </div>
        ),
        enableSorting: false
      })
    ],
    [data]
  )

  return (
    <>
      <DataTable
        data={data}
        columns={columns}
        title='Filter Surat'
        globalFilterPlaceholder='Search User'
        addButtonLabel='Tambahkan Surat Baru'
        onAddButtonClick={() => setAddUserOpen(!addUserOpen)}
      />
      {addUserOpen && <AddLetter />}
      <Drawer
        anchor="right"
        open={viewSuratOpen}
        onClose={() => setViewSuratOpen(false)}
      >
        {selectedSurat && (
          <ViewLetter
            suratData={selectedSurat}
            handleClose={() => setViewSuratOpen(false)}
          />
        )}
      </Drawer>
    </>
  )
}

export default TableLetter
