import {React, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './style.css'
import AccordionList from '../accordionList/AccordionListComponent';
import { Cv } from '../../utils/Cv.js';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CvTabs() {
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`cv-tabs ${isVisible ? "visible" : ""}`}>



      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {
              Cv.map(item => 
                <Tab label={item.title} {...a11yProps(item.num)} sx={{ fontWeight: 'bold' }} />
              )
            }
          </Tabs>
        </Box>



        {
          Cv.map(item => 
            <TabPanel value={value} index={item.num}>
              <AccordionList index={item.num}/>
            </TabPanel>
          )
        }



      </Box>
    </div>
  );
}