import React, { Component } from 'react'
import SeasonDisplayV from './SeasonDisplayV';

class SeasonDisplayC extends Component {
  constructor(props){
    super(props)
    this.state = {
      lat: null,
      long: null,
      errorMessage: ''
    }
  }

  componentDidMount(){
    // Get the client current position after client's approval
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude, long: position.coords.longitude}),
      err => this.setState({errorMessage: err.message, errorMessageCode: err.code})
    )
  }

  componentDidUpdate(){

  }

  render(){

    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <SeasonDisplayV errorMessage={this.state.errorMessage} />         
        </div>
      )
    }

    if (!this.state.errorMessage && this.state.lat) {
      return(
        <div>
          <SeasonDisplayV lat={this.state.lat} long={this.state.long} />
        </div>
      )
    }

    return(      
      <div>
        <h1>Loading...</h1>
      </div>
    )

  }
}

export default SeasonDisplayC
