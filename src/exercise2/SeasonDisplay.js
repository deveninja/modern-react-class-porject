import React, { Component } from 'react'

export class SeasonDisplay extends Component {
  constructor(props){
    super(props)
    this.state = {
      Date: new Date(),
      clientLocation: window.navigator.geolocation
    }
    
  }
  componentDidMount() {  
    // Be careful, the Date() constructor uses 0-indexed month so May is
    // represented with 4 (and not 5)
    this.setState({
      // month: this.state.Date.getMonth(),
      month: this.state.Date.getMonth(),
      today: this.state.Date.getDay(),
      time: this.state.Date.getTime(),
      clientLocalTime: this.state.Date.getTimezoneOffset() / 60,

      // Get the client current position after client's approval
      clientLocation: this.state.clientLocation.getCurrentPosition(
        position => console.log(position),
        err => console.log(err)
      )
    })    
  }

  render() {
    const {
      Date,
      month,
      today,
      time,
      clientLocation
    } = this.state
    return (
      <div>
        {today}
        <br/>
        {month}
        <br/>
        {time}
      </div>
    )
  }
}

export default SeasonDisplay
