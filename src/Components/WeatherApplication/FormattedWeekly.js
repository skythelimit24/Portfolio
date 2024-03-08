import React from 'react'

const FormattedWeekly = () => {
  return (
    <>
       <Grid container key={item.date}>
    <h1> day :{item.date_epoch} MaxTemperature{item.day.maxtemp_c} MinTemperture{item.day.mintemp_c}</h1>
    <Grid container sx={{height:"50px",width:"50px" ,backgroundImage:(`url(${item.day.condition.icon})`)}}> 
    </Grid>
    </Grid>
    </>
  )
}

export default FormattedWeekly
