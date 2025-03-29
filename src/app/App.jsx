import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Hompage from '../pages/home/Hompage'
import Layout from '../features/layout/Layout'

const App = () => { 
  return (
    <BrowserRouter>
    <Layout>
     <Routes>
      <Route path='/' element={<Hompage/>}/>
    </Routes> 
    </Layout>
    
    </BrowserRouter>
  )
}

export default App