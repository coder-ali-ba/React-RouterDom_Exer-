import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'





function WeatherApp() {

  
  const [getInput , setGetInput] = useState("karachi")
  const [weather , setWeather] = useState("")
  const [icon , setIcon] = useState(null)
     
  const getCityName = (value) => {
    setGetInput(value)
   }
  
    
    const getWeather = async() => {
     
       try {
       const APIkey ="b318a99fc41be10d323d2c44e28d6671"
       const response =await axios.get((`https://api.openweathermap.org/data/2.5/weather?q=${getInput}&appid=${APIkey}&units=metric`))
       const data = response.data.main
       setWeather(data)
      
       
       const icon = response.data.weather[0].icon
       setIcon(icon)
         console.log(icon);
       
        } catch (error) {
      console.log(error.message);
      
       }
    }      
 
 console.log(weather);

  useEffect(()=>{
    getWeather()
  }, [])
 
  return (

   <>
   <div className='w-75 m-auto bg-yellow-100 text-center'>
     <h1>Weather App</h1>
    <div className='flex gap-2 justify-center'>
       <input type="text" style={{border:"2px solid gray"}} 
          onChange={(e)=>{
           getCityName(e.target.value)
          }}
        />
        <button onClick={getWeather}> click</button>
    </div>
       
     
       {weather ? (
        <div>
         <h1>{getInput}</h1>
         <img style={{
          width:"100%",
          textAlign:"center"
         }} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="#" />
         <h1>{weather.temp } °C</h1>
         <div>
          <p>Feels : {weather.feels_like}</p>
          <p>Humidity : {weather.humidity}</p>
          <p>Press : {weather.pressure}</p>
         </div>
        </div>

        ) : (
        <h1>{"nhi ha"}</h1>
        )}

   </div>
   
  </>

  );


}

export default WeatherApp
