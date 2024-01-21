import { Routes, Route } from 'react-router-dom'
import ComposeAll from './Components/ComposeAll';
import Faucet from './Components/Faucet';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader';



const App = () => {

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, [])

  


  return (
    <>
      <Routes>
        {Loading ? <> <Route path='/' Component={Loader} /></> : <> <Route path='/' Component={ComposeAll} /></>}

        <Route path='/faucet' Component={Faucet}/>

      </Routes>
    </>
  )
}

export default App