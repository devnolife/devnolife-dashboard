import Grid from '@mui/material/Grid'

import OverviewCard from './OverviewCard'
import Chart from './Chart'
import RecentActity from './Recent'
import TableSurat from './TableSurat'


const Page = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <OverviewCard />
      </Grid>
      <Grid item xs={8}>
        <Chart />
      </Grid>
      <Grid item xs={4}>
        <RecentActity />
      </Grid>
      <Grid item xs={12}>
        <TableSurat />
      </Grid>
    </Grid>
  )
}

export default Page
