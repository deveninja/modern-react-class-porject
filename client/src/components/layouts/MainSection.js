/*
  ===================================================================
    This Component is responsible for encapsulating pages components
  ===================================================================
*/

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import StreamList from '../pages/StreamList'
import HomePage from '../pages/HomePage'
import Logout from '../pages/Logout'
import Login from '../pages/Login'
import Graphs from '../pages/charts/Graphs';

class MainSection extends Component {
  render() {
    return (
      <div>
       <Route path="/" exact component={HomePage} />       
       <Route path="/stream" component={StreamList} />         
       <Route path="/logout" component={Logout} />         
       <Route path="/login" component={Login} />         
       <Route path="/graphs" component={Graphs} />         
      </div>
    )
  }
}

export default MainSection
