import React, { Component } from 'react'

class SearchBar extends Component {

  state = {term: ''}

  onFormSubmit = e => {
    e.preventDefault()
    this.props.onSearchSubmit(this.state.term)
  }

  render() {
    return (
     <div className="ui segment">
      <form action="" className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <input 
            type="text" 
            placeholder="Search..."
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value})} 
          />
        </div>
      </form>
     </div>     
    )
  }
}

export default SearchBar
