import React, { Component } from 'react'

export class SeasonDisplay extends Component {
  
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    )
    
    return (
      <div>
        
      </div>
    )
  }
}

export default SeasonDisplay
