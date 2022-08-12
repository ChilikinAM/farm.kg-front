import { Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Companies } from './pages/Companies';
import { Contacts } from './pages/Contacts';
import { Notfoundpage } from './pages/Notfoundpage';

import { Layout } from './pages/Layout';

import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState([]);

    useEffect(() => {
      fetch('https://raw.githubusercontent.com/ChilikinAM/farm.kg-front/dev/src/components/data/main_en.json')
        .then(res => res.json())
        .then(data => setText(data))
    }, []);
  return (
    <>
      <Routes>
        <Route path='/' element={< Layout text={text} />}>
          <Route index element={<Homepage text={text} />} />
          <Route path='about' element={<About text={text} />} />
          <Route path='Companies' element={<Companies text={text} />} />
          <Route path='Contacts' element={<Contacts text={text} />} />
          <Route path='*' element={<Notfoundpage text={text} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
