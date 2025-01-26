import Grid from '@mui/material/Grid2';
import { Card, CardContent, Chip, Typography, Button } from '@mui/material';

import CustomAvatar from '@/@core/components/mui/Avatar';

const CardAkademik = ({ data }) => {
  if (!data) return null;

  return (
    <Card style={{ flexGrow: 1 }}>
      <CardContent className="flex flex-col items-start gap-2">
        <CustomAvatar variant="rounded" skin="light" color={data?.warna}>
          <i className={data?.ikonAvatar} />
        </CustomAvatar>
        <Typography variant="h6" className="capitalize">
          {data?.judul}
        </Typography>
        <Button variant="contained" color={data?.warna}>
          Ajukan
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardAkademik;
