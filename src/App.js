import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';



function App() {
  return (
    <div  className='App-class' >
      {/* <Header/> */}

      <div style={{ marginTop: '50px'}}> {/*Ask if this is an efficient way to prevent the first text of each page to be placed behind the header component */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
