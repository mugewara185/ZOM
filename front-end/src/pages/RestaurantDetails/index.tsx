import React from 'react'
// import RestaurantDetails_V from './RestaurantDetailsV1'
import RestaurantDetails_V from './RestaurantDetailsV2'
import { logger } from '@/utils/logger'

const index = () => {
logger.log(`!--------------------------------<${RestaurantDetails_V.name}>--------------------------------!`)
  
  return (
    // <div>
      <RestaurantDetails_V/>
    // </div>
  )
}

export default index