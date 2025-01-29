import { useState } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

import DetailSurat from './DetailSurat';

const HistoryPersuratan = () => {
  const [open, setOpen] = useState(false);
  const [selectedSurat, setSelectedSurat] = useState(null);

  const handleOpen = (row) => {
    setSelectedSurat(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSurat(null);
  };

  const rows = [
    { id: 1, tipeSurat: 'SK Beasiswa', status: 'In Progress', tanggalRequest: '2023-10-01' },
    { id: 2, tipeSurat: 'Surat Keterangan', status: 'Completed', tanggalRequest: '2023-10-02' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tipe Surat</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Tanggal Request</TableCell>
            <TableCell>Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.tipeSurat}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.tanggalRequest}</TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => handleOpen(row)}>
                  Detail
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DetailSurat open={open} onClose={handleClose} surat={selectedSurat} />
    </TableContainer>
  );
};

export default HistoryPersuratan;
