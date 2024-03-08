import React, { useState } from 'react'
import { useData } from '../../Context' 
import { Card,TextField, Button } from '@mui/material'
import WeatherCard from './WeatherCard'
import { useTheme } from '../../ContextTheme'
const DisplayWeather = () => {
    const { input, setInput, location ,hourly } = useData()
   const{theme}=useTheme()
    const [text, setText] = useState(input)
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = () => {
        setInput(text)
    }
    return (
        <>
                <Card sx={{ height:"37vh", width:"50vw", display: "flex", flexDirection: "column", padding: "10px", background: theme === 'light' ? 'white' : 'grey', color: theme === 'light' ? 'grey' : 'white',border:"5px solid black" }}>
                    <TextField  value={text} onChange={(e) => handleChange(e)} placeholder='search for the city' id="outlined-basic" variant="outlined" />
                    <Button sx={{ margin: "10px 0px 0px 15px", width: "45px" }} onClick={handleSubmit} variant="contained">Submit</Button>
                    {location && location.name && hourly &&  hourly.day.maxtemp_c && hourly.day.mintemp_c && hourly.day.condition.icon && hourly.day.condition.text &&  <WeatherCard/> }
                </Card>
    
        </>
    )
}

export default DisplayWeather
