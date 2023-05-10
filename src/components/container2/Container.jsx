import 'semantic-ui-css/semantic.min.css'
import {React, useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { HomeImages  } from '../../utils/HomeImages';
import { Image, Reveal } from 'semantic-ui-react'

import './style.css'
import TypingText from '../typingText/TypingText';

import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons"

import Icons from '../iconComponents/Icons';


export default function Container() {

  const [hoveredEmail, setHoveredEmail] = useState(true);
  const [hoveredLinkedIn, setHoveredLinkedIn] = useState(true);
  const [hoveredGitHub, setHoveredGitHub] = useState(true);

  const [clicked, setClicked] = useState(false);

  const handleEmailHover = (b) => {
    setHoveredEmail(b);
  };

  const handleLinkedInHover = (b) => {
    setHoveredLinkedIn(b);
  };

  const handleGitHubHover = (b) => {
    setHoveredGitHub(b);
  };

  function handleClick() {
    setClicked(true);
  }


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
                  <TypingText type={item.title} />
                </div>
              }
              
              {item.size === "Medium" && (
                <div className='typing-text-container'>
                    <Reveal animated='move'>
                        <Reveal.Content visible>
                            <Image src='../../assets/Icons/Email/icons8-envelope-96.png' size='medium' />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src='../../assets/Images/cool-background.png' size='medium' />
                        </Reveal.Content>
                    </Reveal>
                </div>
              )}
              
              {item.size === "Small" && (
                <div 
                  onMouseEnter={item.title==='LinkedIn'? () => handleLinkedInHover("") : () => handleGitHubHover("")}
                  onMouseLeave={item.title==='LinkedIn'? () => handleLinkedInHover(true) : () => handleGitHubHover(true)}
                  className='typing-text-container'
                >
                  <Icons type={item.title} hovered={item.title==='LinkedIn'? hoveredLinkedIn: hoveredGitHub}/>
                  
                  <div className={`typing-text-container ai-outline-mail-container${item.title==='LinkedIn'? (hoveredLinkedIn ? '' : 'visible') :  (hoveredGitHub ? '' : 'visible')}`}>
                    <TypingText type={item.title} />
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

