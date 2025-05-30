import React from 'react'
import { useState , useEffect } from 'react'





function WeatherApp() {


  const [getInput , setGetInput] = useState('karachi')
     
  const cityName = (value) => {
    setGetInput(value)
    // console.log(getInput);
    
   }
  
  const [weather , setWeather] = useState(null)
  const [icon , setIcon] = useState(null)
 
     
     const getWeather = async() => {
      if(!getInput){
        return
      }
       try {
       const APIkey ="b318a99fc41be10d323d2c44e28d6671"
       const response =await axios.get((`https://api.openweathermap.org/data/2.5/weather?q=${getInput}&appid=${APIkey}&units=metric`))
       const data = response.data.main
       setWeather(data)
       console.log(response.data);
       
       
       const icon = response.data.weather[0].icon
       setIcon(icon)
       
        } catch (error) {
      console.log(error.message);
      
       }
    }      
 


  useEffect(()=>{
    getWeather()
  }, [])


                    // style
const image ={
  width:"200px",
  height : "200px",
  marginTop:"-50px"
}

const mainDiv ={
  maxWidth :"400px",
  minWidth : "300px",
   background: "linear-gradient(to bottom, #1e3c72, #2a5298, #4facfe)",
  textAlign:"center",
  paddingTop:"30px",
  paddingBottom:"30px",
  margin:"auto",
  color:"white",
  borderRadius:"20px",
  marginTop:"10vh"
}


  return (
    <div style={mainDiv}>
      <input
        type="text"
        placeholder="Enter City name"
        value={getInput}
        onChange={(e) => cityName(e.target.value)}
      />
      <button onClick={getWeather}>Check Weather</button>
      <div >
        <h2>{getInput}</h2>
        {weather && (
          <>
            <img  style={image} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="#" />
             <h4 style={{marginTop:"-30px"}}>{new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',   
                month: 'long',     
                day: 'numeric'  })}
             </h4>
            <h2 style={{marginTop:"-20px"}}>{weather.temp} °C</h2>
            <div style={{display:"flex", gap:"10px", justifyContent:"center", marginTop:"70px"}}>
              <h4>Max: {weather.temp_max} °C</h4>
              <h4>Min: {weather.temp_min} °C</h4>
              <h4>Humidity: {weather.humidity}%</h4>
            </div>
           
            
          </>
        )}
      </div>
    </div>
  );



  // return (
  //   <div>
  //     <h1>Weather APp</h1>
  //   </div>
  // )
}

export default WeatherApp
