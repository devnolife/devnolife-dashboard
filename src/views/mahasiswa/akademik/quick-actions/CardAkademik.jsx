'use client'

import { useState } from 'react';

import { Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

import Badge from '@mui/material/Badge'

import CustomAvatar from '@/@core/components/mui/Avatar';
import RequestSurat from './RequestSurat';

const dialogComponents = {
  surat: RequestSurat,

};

const CardAkademik = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');

  if (!data) return null;

  const handleOpenDialog = (jenis) => {
    setDialogType(jenis);
    setOpen(true);
  };

  const DialogComponent = dialogComponents[dialogType];

  return (
    <Card style={{ flexGrow: 1, width: '100%' }}>
      <CardContent className="flex flex-col items-start gap-2">
        <div className="flex items-center justify-around w-full">
          <Typography variant="h6" className="capitalize" style={{ wordWrap: 'break-word' }}>
            {data?.judul}
          </Typography>
          <Badge badgeContent={data?.notif} color="error">
            <CustomAvatar variant="rounded" skin="light" color={data?.warna}>
              <i className={data?.ikonAvatar} />
            </CustomAvatar>
          </Badge>
        </div>
        <Button
          onClick={() => handleOpenDialog(data?.jenis)}
          disabled={!data?.isPengajuan}
          sx={{ width: '100%' }}
          variant="contained" color={data?.warna}>
          Ajukan
        </Button>
      </CardContent>
      {DialogComponent && <DialogComponent open={open} setOpen={setOpen} />}
    </Card>
  );
};

export default CardAkademik;
