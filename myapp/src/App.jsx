import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { Routes , Route } from 'react-router-dom'
import WeatherApp from './Components/WeatherApp'
import GithubFetch from './Components/GithubFetch'

function App() {
  const [count, setCount] = useState(0)

  return (
 
    <>
     <Link to={"/"}>Home</Link>
     <Link to={"weather"}>WeatherApp</Link>
     <Link to={"github"}>GitHubFetchinAPp</Link>
       


       <h1>Habib Ali</h1>

     <Routes>
      <Route path='weather' element={<WeatherApp />}>  </Route>
      <Route path='github' element={<GithubFetch />}>  </Route>
     </Routes>  

   
    </>
  )
}

export default App
