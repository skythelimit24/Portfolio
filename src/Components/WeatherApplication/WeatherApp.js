import React from 'react'
import DisplayWeather from './Weather'
import Weartherhourly from './Weartherhourly'
import { useTheme } from '../../ContextTheme'
import { Grid } from '@mui/material'
import Weekly from './Weekly'
import Navbar from '../CommonComponents/Navbar'
const WeatherApp = () => {
  const {theme} = useTheme()
  return (
    <>
    <Navbar/>
     <Grid container sx={{height:"90vh",width:"100vw", display: "flex", justifyContent: "center", alignItems:"center" ,backgroundColor: "grey", flexDirection: "row", background: theme === 'light' ? 'white' : 'grey', color: theme === 'light' ? 'grey' : 'white', marginTop:"90px"}}>
      <DisplayWeather/>
      <Weartherhourly/>
      <Weekly/>
      </Grid>
      
    </>
  )
}

export default WeatherApp
