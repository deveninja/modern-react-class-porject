import React, { Component } from 'react'
import SeasonDisplayView from './SeasonDisplayView';
import helper from './functions';
import data from './data'

class SeasonDisplayController extends Component {
  constructor(props){
    super(props)
    this.state = {
      lat: null,
      long: null,
      errorMessage: '',
      displaySeason: null
    }
  }

  componentDidMount(){
    // Get the client current position after client's approval
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude, long: position.coords.longitude}),
      err => this.setState({errorMessage: err.message, errorMessageCode: err.code})
    )
    
    this.setState({
      displaySeason: helper.getSeason(this.state.lat, new Date().getMonth())
    })
  
  }

  render(){

    const {
      errorMessage,
      errorMessageCode
    } = this.state

    if (this.state.errorMessage && !this.state.lat) {
      console.log('Reason: ', errorMessage)
      console.log('Error Code: ', errorMessageCode)
      return (
        <div>
          <h4>You need to enable geo location to properly use our app</h4>
        </div>
      )
    }

    if (!this.state.errorMessage && this.state.lat) {
      return(
        <div>
          <SeasonDisplayView 
            displaySeason={this.state.displaySeason}
            seasonConfig={this.seasonConfig}
            data={data}
          />
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

export default SeasonDisplayController
