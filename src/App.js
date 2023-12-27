import './App.css';

import Home from './Compo/Home';
import { createContext, useState } from 'react';
import Usememo from './Compo/Usememo';
import Usereducer from './Compo/Usereducer';
import Usecallback from './Compo/Usecallback';
import Useref from './Compo/Useref';

export const nameContext = createContext()

function App() {
  
  let [val,setVal]=useState('Creative');

  return (
    <>
      {/* <nameContext.Provider value={val}>
          <Home />
      </nameContext.Provider> */}

      {/* <Usememo /> */}

      {/* <Usereducer /> */}

      {/* <Usecallback /> */}

      <Useref />

    </>
  );
}

export default App;
