import React, { useState, useEffect } from 'react';
import './style.css'

const texts= [
  {type:'Me', text:`HI THERE ! :)\nMy Name Is Alireza Omidi\nIn case you're not familiar with it, the most common form of lorem ipsum text is the following: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`},
  {type:'Email', text:`This Is da Email`},
  {type:'LinkedIn', text:`This Is da LinedIn`},
  {type:'GitHub', text:`das ist github`}
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
