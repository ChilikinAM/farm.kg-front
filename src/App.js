import { Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Companies } from './pages/Companies';
import { Contacts } from './pages/Contacts';
import { Notfoundpage } from './pages/Notfoundpage';

import { Layout } from './pages/Layout';

import React from 'react';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={< Layout />}>
          <Route index element={<Homepage />} />
          <Route path='about' element={<About />} />
          <Route path='Companies' element={<Companies />} />
          <Route path='Contacts' element={<Contacts />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
