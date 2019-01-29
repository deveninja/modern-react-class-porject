import React, { Component } from 'react'
import SeasonDisplayView from './SeasonDisplayView';
import helper from './functions';
import data from './data'
import Loader from './Loader';

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

     // After getting the current location, identify if the season is Summer or Winter
    // by calculating the latitude and the current month
    this.setState({
      displaySeason: helper.getSeason(this.state.lat, new Date().getMonth())
    })

  }

  renderContent = () => {
    
    const {
      errorMessage,
      errorMessageCode
    } = this.state

    // Renders if there is an error or no latitude data fetched
    if (this.state.errorMessage && !this.state.lat) {
      console.log('Reason: ', errorMessage)
      console.log('Error Code: ', errorMessageCode)
      return (
        <div>
          <h4>You need to enable geo location to properly use our app</h4>
        </div>
      )
    }

    // Renders if everything is going according to program logic
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

    // Renders during when client is asked for geo location permission
    return <Loader message="Please accept location request to properly use the app" />
  }

  render(){
    return (
      <div className="container">
        {this.renderContent()}
      </div>
    )
  }
}

export default SeasonDisplayController
