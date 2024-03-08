import { Grid} from '@mui/material'
import moment from 'moment'
import React from 'react'
const HourlyDataCard = ({time , temp , condition , icon}) => {
  const date = new Date (time*1000)
  const formatedHour = moment(date).format("h a")
  
  return (
    <Grid container sx={{display:"flex",flexDirection:"row"  ,justifyContent:'center',alignItems:"center" ,color:"black",height:"123px",width:"150px", border:"solid", borderRadius:"10px", padding:"5px",backgroundColor:"pink"}}>
            <Grid container sx={{ height:"50px",width:"58px",justifyContent:"center",alignItems:"center" ,backgroundImage:(`url(${icon})`)}}></Grid>
      <Grid container sx={{font:"small-caption",fontWeight:"700" ,justifyContent:"center"}}>{formatedHour}</Grid>
      <Grid container sx={{font:"small-caption",fontWeight:"700",justifyContent:"center"}}>{temp}°C</Grid>
      <Grid container sx={{font:"small-caption",fontWeight:"700",justifyContent:"center"}}>{condition}</Grid>
    </Grid>
  )
}

export default HourlyDataCard
