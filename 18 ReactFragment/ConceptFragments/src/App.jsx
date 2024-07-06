import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//Syntax1:<>...</> This can used without importing
//Syntax2:<React.Fragment>..</React.Fragment> This can used by impotring
//For example
import React from 'react'
function App() {
 return (
  //<>...</> Syntax1
  <React.Fragment>
  <h1>This  is the Concept of fragment:</h1>
  <p className="lead">Fragmentation is bassically used for return multiple value</p>
  <p>Fragmentation make a combine all the code in a single component</p>
  </React.Fragment>
 )
}

export default App;
