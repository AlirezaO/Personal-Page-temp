import {React, useState, useEffect} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { HomeImages  } from '../../utils/HomeImages';

import { getRandomColor } from './ColorGenerator';
import { colors } from '../../utils/CeramicColors';
import './style.css'
import TypingText from '../typingText/TypingText';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';

import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons"


export default function QuiltedImageList() {

  // const [flag, setFlag] = useState(false);

  // useEffect(() => {tttt
      
  //   setTimeout(function() {
  //     setFlag(!flag)
  //   }, 5000);
      

  // }, [flag]);

  const [hoveredEmail, setHoveredEmail] = useState("");

  const handleEmailHover = (b) => {
    setHoveredEmail(b);
  };

  const [hoveredLinkedIn, setHoveredLinkedIn] = useState("");

  const handleLinkedInHover = (b) => {
    setHoveredLinkedIn(b);
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ImageList
        sx={{ width: 500, height: 450  }}
        variant="quilted"
        cols={4}
        rowHeight={221}
      >
        {HomeImages.map((item,) => (
          <ImageListItem 
              className={`animated-background`}
              // className={`animated-background ${(item.size==='Medium' && hoveredImage) ? 'invisible' : ''}`}
              key={item.img} 
              cols={item.cols || 1} 
              rows={item.rows || 1}
              sx={{ display: 'flex', justifyContent: 'center' }}
             
            >


            <div>
              <h3>{item.title}</h3>
              {item.size==='Large' &&  
                <div className="typing-text-container">
                  <TypingText type='me' />
                </div>
              }
              
              {item.size === "Medium" && (
                <div 
                  onMouseEnter={() => handleEmailHover(true)}
                  onMouseLeave={() => handleEmailHover("")}
                  className='typing-text-container'
                >
                  <div className={`ai-outline-mail-container ${hoveredEmail ? 'visible' : ''}`}>
                    <IconContext.Provider value={{ className: "shared-class", size: 100 }}>
                      <AiOutlineMail />
                    </IconContext.Provider>
                  </div>
                  
                  <div className={`ai-outline-mail-container ${hoveredEmail ? '' : 'visible'}`}>
                    <TypingText type='email' />
                  </div>

                </div>
                
              )}

            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

