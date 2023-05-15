import {React, useState} from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Cv } from '../../utils/Cv.js';
import CardComponent from '../card/CardComponent.jsx';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(241, 250, 238, 255)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, 255)',
}));



export default function AccordionList({index}) {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null);
  };

  return (
    <div className='accordion-list'>

      {
          Cv[index].list.map((item, i)=>

            <Accordion  key={i}
                        expanded={expanded === i}
                        onChange={handleChange(i)}
            >
              <AccordionSummary
                aria-controls={`panel${i}d-content`}
                id={`panel${i}a-header`}
              >
                <Typography>{item.title}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>
                  <CardComponent data={item}/>
                  <ul>
                    {item.discription.map((disc, j) => 
                      <li key={j}>
                        {disc}
                      </li>
                    )}
                  </ul>
                  
                </Typography>
              </AccordionDetails>
            </Accordion>
            
          )
        }
      
      
    </div>
  );
}