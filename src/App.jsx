import React from 'react';

import {NavBar, Hero} from './Components'

import "./sass/base.scss";

function App() {
  return (
    <div className='main-wrapper'>
      <NavBar/>
      <Hero/>
    </div>
  );
}

export default App;