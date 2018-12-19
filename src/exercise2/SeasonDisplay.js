import React, { Component } from 'react'

class SeasonDisplay extends Component {
  constructor(props){
    super(props)
    this.state = {
      latt: null,
      long: null
    }
  }
  render() {
    // Get the client current position after client's approval
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    )
    return (      
      <div>
        <h4>Lattitude: {this.state.latt}</h4>
      </div>
    )
  }
}

export default SeasonDisplay
