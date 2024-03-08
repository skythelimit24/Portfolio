import React from 'react'
import WeeklyData from './WeeklyData'
import { useData } from '../../Context'
const Weekly = () => {
   const{weekly} =useData()
  return (
    <div>
   { weekly && <WeeklyData/> }
    </div>
  )
}

export default Weekly
