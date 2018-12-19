import React from 'react'

const SeasonDisplayView = props => {
  
  return(
    <div>
      {props.displaySeason === 'winter' ? 'Wow! katugnaw ba!' : 'OMG! ka init, I want an Ice Cream'}
    </div>
  )
      
}

export default SeasonDisplayView
