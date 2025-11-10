import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import MainLayout from './Components/MainLayout'
import Registration from './Components/Registration'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/main_layout' element={<MainLayout/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App