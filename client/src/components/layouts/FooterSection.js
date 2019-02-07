import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FooterSection extends Component {

  componentDidMount() {
    this.renderBreadCrumbs()
  }

  componentDidUpdate() {
    this.renderBreadCrumbs()
  }
 
  renderBreadCrumbs = () => {
    const url = window.location.href.split('/')
    console.log(url.length)
    
    for(let i = 2; i < url.length; i++){
    
       return(
        <Link to={`/${url[i]}`}>{url[i]}</Link>

       )
        
       
       
    }
  }
  
  render() {
    return (
      <div className="footer ui inverted segment pointing no-border sticky-bottom text-center">
        
        <div className="ui breadcrumb">
          {this.renderBreadCrumbs()}
        </div>
       
      </div>
    )
  }
}

export default FooterSection
