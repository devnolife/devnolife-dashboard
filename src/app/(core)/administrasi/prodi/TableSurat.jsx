import { Card, CardContent, CardHeader, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const TableSurat = () => {
  return (
    <Card variant='outlined' sx={{ borderRadius: 2 }}>
      <CardHeader title='Surat Terbaru' />
      <CardContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Jenis Surat</TableCell>
                <TableCell>Perihal</TableCell>
                <TableCell>Pengirim</TableCell>
                <TableCell>Tanggal</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Surat Masuk</TableCell>
                <TableCell>Permohonan Kerjasama</TableCell>
                <TableCell>Bapak Joko</TableCell>
                <TableCell>12-12-2021</TableCell>
                <TableCell>
                  <Chip label='Baru' color='primary' />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Surat Keluar</TableCell>
                <TableCell>Permohonan Kerjasama</TableCell>
                <TableCell>Bapak Joko</TableCell>
                <TableCell>12-12-2021</TableCell>
                <TableCell>
                  <Chip label='Dikirim' color='success' />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>Surat Masuk</TableCell>
                <TableCell>Permohonan Kerjasama</TableCell>
                <TableCell>Bapak Joko</TableCell>
                <TableCell>12-12-2021</TableCell>
                <TableCell>
                  <Chip label='Diterima' color='success' />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default TableSurat
