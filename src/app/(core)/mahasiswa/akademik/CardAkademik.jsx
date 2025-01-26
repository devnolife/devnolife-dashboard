import Grid from '@mui/material/Grid2';
import { Card, CardContent, Chip, Typography, Button } from '@mui/material';

import Badge from '@mui/material/Badge'

import CustomAvatar from '@/@core/components/mui/Avatar';

const CardAkademik = ({ data }) => {
  if (!data) return null;

  return (
    <Card style={{ flexGrow: 1 }}>
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
        <Button disabled={!data?.isPengajuan}
          sx={{ width: '100%' }}
          variant="contained" color={data?.warna}>
          Ajukan
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardAkademik;
