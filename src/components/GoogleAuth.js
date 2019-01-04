import React, { Component } from 'react'
import { connect } from 'react-redux'

import { GOOGLE_AUTH_ID } from '../actions/constants'
import { signIn, signOut } from '../actions/auth'


class GoogleAuth extends Component {

  componentDidMount(){
    // window.gapi will only work after adding the script tag in the public html
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: GOOGLE_AUTH_ID,
        scope: 'email'
      }).then(() => {
        this.Auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.Auth.isSignedIn.get())
        this.Auth.isSignedIn.listen(this.onAuthChange)
      })
      .catch( err => console.log(err))
    })
  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn) {
    this.props.signIn(this.Auth.currentUser.get().getId())
    } else {
    this.props.signOut()
    }
  }

  renderGoogleLoginBtn = () => {
    if (this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui button google red">
          <i className="google icon" />
          Logout
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui button google red">
          <i className="google icon" />
          Login with Google
        </button>
      )
    }
  }

  onSignInClick = () => {
    this.Auth.signIn()
  }

  onSignOutClick = () => {
    this.Auth.signOut()
  }

  render() {
    return (
      <div className="item">
        {this.renderGoogleLoginBtn()}
      </div>
    )
  }
}




const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  } 
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
