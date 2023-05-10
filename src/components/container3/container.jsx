
import React, { useEffect, useRef, useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './style.css'
import TypingText from '../typingText/TypingText';
import 'semantic-ui-css/semantic.min.css'
import { Icon, Popup, Grid } from 'semantic-ui-react'
import { Image, Reveal } from 'semantic-ui-react'



function CustomComponent2() {
    const [openPopup, setOpenPopup] = useState(false);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setOpenPopup(true);
      }, 2000);
  
      return () => clearTimeout(timeoutId);
    }, []);
  
    const handleClose = () => {
      setOpenPopup(false);
    };
  
    return (
      <div className="popover-button">
        <Popup
          trigger={
            <Image
              size="small"
              src="../../assets/Icons/DarkTheme.png"
            />
          }
          on="click"
          open={openPopup}
          onClose={handleClose}
          position="bottom left"
          content={
            <div className="typing-text-container">
              <Typography
                sx={{
                  p: 8,
                  padding: "20px",
                }}
              >
                <TypingText type={"Me"} />
              </Typography>
            </div>
          }
        />
      </div>
    );
  }
  
  
export default CustomComponent2;