import './App.css'
import AmbiguousCase from './components/AmbiguousCase.jsx'
import HeronsFormula from './components/HeronsFormula.jsx'
import NewtonMethod from './components/NewtonMethod.jsx'
import Polynomial from './components/Polynomial.jsx'

function App() {

  return (
    <div className='functions'>
      <HeronsFormula />
      <AmbiguousCase />
      <NewtonMethod />
      <Polynomial />
    </div>
  )
}

export default App;
