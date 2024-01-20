import {Routes,Route} from 'react-router-dom'
import ComposeAll from './Components/ComposeAll';
import Faucet from './Components/Faucet';

const App = () => {
  return (
    <>
    <Routes>
      <Route  path='/'  Component={ComposeAll}/>
      <Route  path='/faucet'  Component={Faucet}/>
    </Routes>
    </>
  )
}

export default App