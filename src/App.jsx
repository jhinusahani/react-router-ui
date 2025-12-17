import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CoursesDetail from './pages/CoursesDetail'
import Navbar2 from './components/Navbar2'
import { Route, Routes } from 'react-router-dom'






const App = () => {
  return (
<div className='bg-black min-h-screen text-white'>

      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<CoursesDetail />}/>

        <Route path='/product' element={<Product />}>
        <Route path='men' element={<Men />} />
        <Route path='women' element={<Women />} />
        <Route path='kids' element={<Kids />} />
        </Route>
        

        <Route path='*' element={<NotFound />} />
        
      </Routes>
    
      <Footer />
    </div>
  )
}

export default App
