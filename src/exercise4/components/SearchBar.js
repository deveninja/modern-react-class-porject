import React, { Component } from 'react'

class SearchBar extends Component {
  
  state = {searchQuery: ''}

  onInputChange = (e) => {
    this.setState({ searchQuery: e.target.value })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    // @TODO maker sure we invoke the function
    // Callback from parent component
    this.props.onFormSubmit(this.state.searchQuery)
  }

  

  render() {
    return (
      <div className="search-bar ui segment">
      <form action="" className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Youtube video search</label>
          <input 
            type="text" 
            placeholder="Search videos..."
            value={this.state.searchQuery}
            onChange={this.onInputChange} 
          />
        </div>
      </form>
     </div>     
    )
  }
}

export default SearchBar
