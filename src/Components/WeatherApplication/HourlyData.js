import React from 'react'
import { useData } from '../../Context'
import HourlyDataCard from './HourlyDataCard'
import { Grid ,Typography } from '@mui/material'
const HourlyData = () => {
    const {hourly} = useData()

  return (
    <>
  <Typography sx={{fontWeight:"900" ,marginTop:"30px",color:"black"}} >HourlyData</Typography>
    <Grid container sx={{display:"flex" ,height:"150px" ,width:"800px", justifyContent:"space-evenly",flexDirection:"column", gap:"5px",margin:"20px",overflowX:"scroll",overflowY:"hidden",'&::-webkit-scrollbar': { display: 'none'  },listStyle:"none"}}>
    {hourly.hour.map((item)=>{
        return <li key={item.time}> <ul><HourlyDataCard  time ={item.time_epoch} temp={item.temp_c} condition={item.condition.text} icon={item.condition.icon}/> </ul></li>
    })}  
    </Grid>
    </>
  )
}

export default HourlyData
