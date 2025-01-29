'use client'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { styled } from '@mui/material/styles'
import MuiTimeline from '@mui/lab/Timeline'

const Timeline = styled(MuiTimeline)({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

const ActivityTimeline = ({ data }) => {
  const renderTimelineItems = (activities) => {
    return activities.map((activity, index) => {
      const isSameDay = index > 0 && activities[index - 1].date === activity.date;


      return (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color={activity.color} />
            {!isSameDay && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <div className='flex items-center justify-between flex-wrap gap-x-4 pbe-[7px]'>
              <Typography className='font-medium text-textPrimary'>{activity.title}</Typography>
              <Typography variant='caption'>{activity.date}</Typography>
            </div>
            <Typography className='mbe-1'>{activity.description}</Typography>
            {activity.details && (
              <div className='flex items-center justify-between'>
                <Typography className='font-medium'>{activity.details}</Typography>
                {activity.image && <img alt={activity.details} src={activity.image} className='bs-5' />}
              </div>
            )}
            {activity.avatars && (
              <AvatarGroup>
                {activity.avatars.map((avatar, idx) => (
                  <Avatar key={idx} alt={avatar.name} src={avatar.src} />
                ))}
              </AvatarGroup>
            )}
          </TimelineContent>
        </TimelineItem>
      );
    });
  };

  return (
    <Card>
      <CardHeader
        avatar={<i className='text-xl tabler-list-details' />}
        title='Activity Timeline'
        titleTypographyProps={{ variant: 'h5' }}

        // action={<OptionMenu options={['Share timeline', 'Suggest edits', 'Report bug']} />}
        sx={{ '& .MuiCardHeader-avatar': { mr: 3 } }}
      />
      <CardContent>
        <Timeline>
          {renderTimelineItems(data)}
        </Timeline>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;
