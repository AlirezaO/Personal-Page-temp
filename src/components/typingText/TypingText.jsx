import React, { useState, useEffect } from 'react';
import './style.css'

const texts= [
  {type:'Me', text:`HI THERE ! :)\nMy name is Alireza Omidi\n
I'm excited to present to you my first version of my personal webpage, where you can learn a little bit more about me, my skills, and my experience. 
You'll also find a list of ways to get in touch with me on the right-hand side of the page. 
I'm hoping to use this site as a platform to showcase my work and grow as an advanced web developer.\n
As an aspiring web developer, I'm always looking for ways to improve my skills and create better websites. 
I'd love to hear your suggestions on how I can make this website even better, so please don't hesitate to reach out!`},
]

const TypingText = ({type}) => {

  const [text, setText] = useState(''); 
  const delay = 40; // in milliseconds
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

        <textarea rows="15" cols="60" value={text} className="text-area-animated-background" />

    </>
  );
};

export default TypingText;
