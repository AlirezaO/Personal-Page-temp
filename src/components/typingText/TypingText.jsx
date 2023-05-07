import React, { useState, useEffect } from 'react';
import './style.css'

const texts= [
  {type:'me', text:`HI THERE ! :)\nMy Name Is Alireza Omidi`},
  {type:'email', text:`This Is da Email`},
  {type:'linkedin', text:`This Is da LinedIn`},
]

const TypingText = ({type}) => {
  const [text, setText] = useState(''); 
  const delay = 120; // in milliseconds
  let message = texts.find(t => t.type === type).text
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => prevText + message.charAt(i));
      i++;
      if (i === message.length) clearInterval(intervalId);
    }, delay);
    return () => clearInterval(intervalId);
  }, [message, delay]);

  return (
    <textarea rows="1" cols="25" value={text} readOnly className="text-area-animated-background" />
  );
};

export default TypingText;
