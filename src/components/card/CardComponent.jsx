import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './style.css'


export default function CardComponent({data}) {

  return (
      <Card className='card-class' sx={{ minWidth: 100 }}>
        <CardContent className='card-content-class'>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.institute}
          </Typography>
          <Typography variant="h5" component="div">
            {data.jobTitle}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data.from}{data.to}
          </Typography>
          <Typography variant="body1">
            
            <br />
            {data.summary}
          </Typography>
        </CardContent>
      </Card>
  );
}