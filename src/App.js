import React from 'react';

import './styles/global.css';

import Contact from './components/Contact';
import Contacts from './components/Contacts';
import Filters from './components/Filters';
import Topbar from './components/Topbar';

function App() {
    return (
        <>
          <Topbar />
          <Filters />
          <Contact />
          <Contacts />
        </>
    )
}

export default App;
