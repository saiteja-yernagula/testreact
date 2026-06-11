import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Weather() {
    let [city,setCity]=useState('')
    let [details,setDetails]=useState(null)
    async function findweather(){
        let data=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=466ddaa21a8de191e9f608bd11a56acb`)
    setDetails(data.data)
    console.log(data.data )
    }
  return (

    <div>
        <h1>weather app</h1>
        <input type="text" value={city} onChange={e=>setCity(e.target.value)} />
        <button onClick={findweather}>find</button>
        <h1>{details && (
            <div>

            <h1>{details.name}</h1>
            <h1>{details.main.temp}</h1>
            </div>
        )}</h1>
    </div>
  )
}

export default Weather