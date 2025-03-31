import { useState } from 'react'
import './App.css'
import AmbiguousCase from './components/AmbiguousCase.jsx'
import HeronsFormula from './components/HeronsFormula.jsx'
import NewtonMethod from './components/NewtonMethod.jsx'
import Polynomial from './components/Polynomial.jsx'



function App() {

  return (
    <div>
      <AmbiguousCase />
      <HeronsFormula />
      <NewtonMethod />
      <Polynomial />
    </div>
  )
}

export default App;
