import Grid from '@mui/material/Grid';

import OverviewCard from '../OverviewCard';

const Page = () => {
  return (
    <Grid container spacing={2} padding={2}>
      <Grid item xs={12}>
        <OverviewCard />
      </Grid>
      <Grid item xs={12}>
        <div>
          <h1>Chart</h1>
        </div>
      </Grid>
    </Grid>
  );
};

export default Page;
