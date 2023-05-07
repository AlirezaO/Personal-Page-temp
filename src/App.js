import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contacts/Contact';
import Header from './components/header/Header';


function App() {
  return (
    <div >
      <Header/>

      <div style={{ marginTop: '84px'}}> {/*Ask if this is an efficient way to prevent the first text of each page to be placed behind the header component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
