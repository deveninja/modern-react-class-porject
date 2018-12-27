import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class HeaderSection extends Component {
  state = {
    currentActiveMenuItem: null
  }

  isLoggedIn() {
    if(1 === 2){ 
      return <Link to="/logout" className="item">Logout</Link>
    } else {
      return <Link to="/login" className="item">Login</Link>
    }
  }
  

  render() {
    return (
      <div className="ui inverted pointing menu">
        <Link to="/" className="item">
          Streamy
        </Link>
        <div className="right menu">
          <Link to="/stream" className="item">
            Stream List
          </Link>
          {this.isLoggedIn()}
        </div>
      </div>
    )
  }
}

export default HeaderSection
