import React from 'react'
import { useData } from '../../Context'
import { Grid} from '@mui/material'
import HourlyData from './HourlyData'
const Weartherhourly = () => {
  const {hourly} = useData()
  return (
    <>
    <Grid container sx={{justifyContent:"center",alignItems:"center", flexDirection:"column" }}>
   {hourly && hourly.day && hourly.hour && <HourlyData/>} 
   </Grid>
    </>
  )
}

export default Weartherhourly
