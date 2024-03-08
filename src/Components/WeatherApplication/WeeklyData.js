
import React from 'react'
import { useData } from '../../Context'
import { Grid } from '@mui/material'
const WeeklyData = () => {
    const {weekly} = useData()

  return (
    <div>
{weekly.map((item)=>{
    return <Grid container key={item.date}>
    <h1> day :{item.date} MaxTemperature{item.day.maxtemp_c} MinTemperture{item.day.mintemp_c}</h1>
    <Grid container sx={{height:"50px",width:"50px" ,backgroundImage:(`url(${item.day.condition.icon})`)}}> 
    </Grid>
    </Grid>
})}
    </div>
  )
}

export default WeeklyData
