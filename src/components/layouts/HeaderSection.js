import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../GoogleAuth';



class HeaderSection extends Component {
  state = {
    currentActiveMenuItem: null,
    isAuth: false
  }

  isLoggedIn() {
    if(this.state.isAuth){ 
      return <Link to="/logout" className="item" onClick={() => {this.setState({isAuth: false})}}>Logout</Link>
    } else {
      return <Link to="/login" className="item" onClick={() => {this.setState({isAuth: true})}}>Login</Link>
    }
  }
  

  render() {
    return (
      <div className="ui inverted pointing menu">
        <Link to="/" className="item">
          Stream App
        </Link>
        <div className="right menu">
          <Link to="/stream" className="item">
            Stream List
          </Link>
          {/* {this.isLoggedIn()} */}
          <GoogleAuth />
        </div>
      </div>
    )
  }
}

export default HeaderSection
