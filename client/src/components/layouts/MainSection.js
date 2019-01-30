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
import StreamCreate from '../pages/streams/StreamCreate';
import StreamEdit from '../pages/streams/StreamEdit';
import StreamDelete from '../pages/streams/StreamDelete';

class MainSection extends Component {
  render() {
    return (
      <div>
       <Route path="/" exact component={HomePage} />       
       <Route path="/stream" exact component={StreamList} />         
       <Route path="/stream/create" component={StreamCreate} />         
       <Route path="/stream/edit" component={StreamEdit} />         
       <Route path="/stream/delete" component={StreamDelete} />         
       <Route path="/logout" component={Logout} />         
       <Route path="/login" component={Login} />         
       <Route path="/graphs" component={Graphs} />        
      </div>
    )
  }
}

export default MainSection
