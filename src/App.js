import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Loginscreen from './Components/Loginscreen'
import Signup from './Components/Signup'
import Navbar from './Components/Navbar'
import Pnael from './Components/Pnael'



function App(){
  return(
    <BrowserRouter>

    <Routes>
      <Route path='/login' element={<Loginscreen/>}></Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/panel' element={<Pnael/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App