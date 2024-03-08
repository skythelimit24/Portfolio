import React,{useEffect, useState} from 'react'
import { CardContent, Grid, Typography } from '@mui/material'
import { useData } from '../../Context'
const WeatherCard = () => {
  const { hourly, location } = useData()
  const [textColor, setTextColor] = useState('black');

  useEffect(()=>{
    if(Math.floor(hourly.day.mintemp_c)>=18){
      setTextColor("red")
     }
     else{setTextColor("blue")}
  },[hourly.day.mintemp_c])



  return (
    <>
    <Grid container sx={{display:"flex", flexDirection:"row",padding:"0px 60px 0px 40px", alignItems:"center"}}>
      <Grid container>
     <CardContent sx={{color:`${textColor}`}}>
      <Typography sx={{ fontSize: 30 ,fontweight:"1000" }} gutterBottom>
        Weather details of {location.name}

      </Typography>
      <Typography sx={{fontWeight:"900"}} component="div">
        Maximum Temperature :  {hourly.day.maxtemp_c} °C

      </Typography>
      <Typography sx={{fontWeight:"900"}} component="div">
        Minimum Temperature :  {hourly.day.mintemp_c} °C

      </Typography>
      </CardContent>
      </Grid>
      <Grid container sx={{ height: "70px", width: "80px", backgroundImage: `url(${hourly.day.condition.icon})` }}>
      </Grid>
      <Typography  sx={{  fontWeight: "1000", padding: "0px 10px" ,color:`${textColor}` }}>{hourly.day.condition.text}</Typography>
    </Grid>
    </>
  )
}     

export default WeatherCard
