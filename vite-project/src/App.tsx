//import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';

import Desktop from './Desktop';
import Mobile from './Mobile';

function App() {
  const isDesktop: boolean = useMediaQuery({query: "(min-width: 768px)"})

  return (
    <>
      {isDesktop && <Desktop/>}
      {!isDesktop && <Mobile/>}
    </>
  )
}

export default App
