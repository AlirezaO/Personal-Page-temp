import React, { useState, useEffect } from 'react';
import './style.css'

const texts= [
  {type:'Me', text:`HI THERE ! :)\nMy Name Is Alireza Omidi\nIn case you're not familiar with it, the most common form of lorem ipsum text is the following: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`},
  {type:'Email', text:`hi this is my email: a@yahoo.com`},
  {type:'LinkedIn', text:`This Is da LinedIn`},
  {type:'GitHub', text:`das ist github`}
]

const TypingText = ({type}) => {

  const [text, setText] = useState(''); 
  const delay = 60; // in milliseconds
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

  //YOU WERE TRYING TO PUT YOUR EMAIL ADDRESS AS A LINK IN THE EMAIL CERAMIC COMPONENT. FIX IT
  return (
    <>

        <textarea rows="10" cols="80" value={text} className="text-area-animated-background" />

    </>
  );
};

export default TypingText;
