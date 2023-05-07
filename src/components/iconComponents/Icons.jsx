import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons"
import {React, useState, useEffect} from 'react';
import './style.css'


const Icons = ({type, hovered}) =>{
    
        if (type === 'Email') {
                 
            return(
                <div className={`ai-outline-mail-container ${hovered ? 'visible' : ''}`}>
                    <IconContext.Provider value={{ className: "shared-class", size: 100 }}>
                        <AiOutlineMail />
                    </IconContext.Provider>
                </div>
            )
            
        }else if (type === 'LinkedIn'){
            return(
                <div className={`ai-outline-mail-container ${hovered ? 'visible' : ''}`}>
                    <IconContext.Provider value={{ className: "shared-class", size: 100 }}>
                        <AiFillLinkedin/>
                    </IconContext.Provider>
                </div>
            )
        }else if (type === 'GitHub'){
            return(
                <div className={`ai-outline-mail-container ${hovered ? 'visible' : ''}`}>
                    <IconContext.Provider value={{ className: "shared-class", size: 100 }}>
                        <AiFillGithub/>
                    </IconContext.Provider>
                </div>
            )
        }
}

export default Icons;