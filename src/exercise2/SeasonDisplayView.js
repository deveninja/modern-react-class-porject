import React from 'react'

const SeasonDisplayView = props => {

  const {text, iconName} = props.data.seasonConfig[props.displaySeason]
  
  return(
    <div>
      <h4>{text}</h4>
     
      <p>{iconName}</p>
    </div>
  )
      
}

export default SeasonDisplayView
