import './App.css'
import { Link } from 'react-router-dom'
import Navigation from './navigation/Navigation'
import Navar from './components/navar/Navar'
function App() {

  return (
    <div className='App'>
      <header>
        <Navar />
      </header>
       <Navigation />
    </div>
  )


}

export default App
