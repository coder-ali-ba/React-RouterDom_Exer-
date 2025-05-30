import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


function GithubFetch() {



const [Input , setInput] = useState("coder-ali-ba")
  const [Data , setData] = useState("") 
 
 const getInput = (value) => {
  setInput(value)
 }



 const getAcc = async() => {
  try {
    const response =await axios.get(`https://api.github.com/users/${Input}`)
     setData(response.data)
    getInput("")
    
  } catch (error) {
     console.log("not found");
     
  }
}



  useEffect(()=>{
    getAcc()
  } , [])

  return (
    <>
   
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🔍 GitHub Profile Finder</h1>
          <div className="flex gap-2 mb-6">
           <input type="text" onChange={(e)=>{
             getInput(e.target.value)
             }} 
             value={Input}
             placeholder="Enter GitHub username"
             className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
           <button 
           onClick={getAcc}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
           >Get Profile</button>
          </div>

      {Data && (

        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md text-center">
          <img
            src={Data.avatar_url}
            alt="Avatar"
            className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">{Data.name || Data.login}</h2>
          <p className="text-gray-500">{Data.bio}</p>
          <div className="flex justify-around mt-6 text-sm text-gray-700">
            <div>
              <p className="font-bold">{Data.public_repos}</p>
              <p>Repos</p>
            </div>
            <div>
              <p className="font-bold">{Data.followers}</p>
              <p>Followers</p>
            </div>
            <div>
              <p className="font-bold">{Data.following}</p>
              <p>Following</p>
            </div>
          </div>
          <a
            href={Data.html_url}
            target="_blank"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      )}
        </div>
    </>

   )
}

export default GithubFetch
