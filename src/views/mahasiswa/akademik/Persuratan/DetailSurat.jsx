import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const DetailSurat = ({ open, onClose, surat }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Detail Surat</DialogTitle>
      <DialogContent>
        {/* Render surat details here */}
        {surat && (
          <>
            <p>Tipe Surat: {surat.tipeSurat}</p>
            <p>Status: {surat.status}</p>
            <p>Tanggal: {surat.tanggalRequest}</p>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Tutup</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailSurat;
