import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { Routes , Route } from 'react-router-dom'
import WeatherApp from './Components/WeatherApp'
import GithubFetch from './Components/GithubFetch'
import Navbar from './Components/Navbar'

function App() {
  

  return (
 
    <>
     
       
      <div className='container-fluid bg-green-100 m-auto '>

      
       <div className=' flex  items-center justify-around gap-8 '>

          <h1>Home</h1>
         <Link to={"weather"}>WeatherApp</Link>
         <Link to={"github"}>GitHubFetchinAPp</Link>
             <img style={{
              width:"80px",
              height:"80px",
              borderRadius:"50%"
             }} src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg" alt="#" />
       </div>

     

     </div>
     <Routes>
      <Route path='weather' element={<WeatherApp />}>  </Route>
      <Route path='github' element={<GithubFetch />}>  </Route>
     </Routes>  
    </>
  )
}

export default App
