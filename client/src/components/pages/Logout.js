import React from 'react'

const Logout = () => {
  return (
    <div className="ui container">

      <div className="ui inverted segment">

        <div className="ui inverted form">

          <div className="two fields">
            <div className="field">
              <label>First Name</label>
              <input placeholder="First Name" type="text" />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input placeholder="Last Name" type="text" />
            </div>

          </div>

          <div className="inline field">
            <div className="ui checkbox">
              <input type="checkbox" tabIndex="0" className="hidden" />
              <label>I agree to the terms and conditions</label>
            </div>
          </div>
          <div className="ui submit button">Submit</div>
        </div>
      </div>  
    </div>
  )
}

export default Logout
