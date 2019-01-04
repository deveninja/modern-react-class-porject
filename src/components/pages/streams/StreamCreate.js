import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends Component {

  renderInputText = (formProps) => {
    if(formProps.input.name === 'img-url'){
      return (
        <div className="Field">
          <label>{formProps.label}</label>
          <input {...formProps.input} />
            <div style={{
              width: '100%',
              // minHeight: '1rem',
              height: '300px', 
              marginTop: '1rem', 
              backgroundImage: `url(${formProps.input.value})`, 
              backgroundSize: 'contain', 
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '4px'
              }}>
            </div>
        </div>
      )
    }

    return (
      <div className="Field">
        <label>{formProps.label}</label>
        <input {...formProps.input} />      
      </div>
    )
  }

  renderTextArea(formProps) {
    return (
      <div className="Field">
        <label>{formProps.label}</label>
        <textarea {...formProps.input} />
      </div>
    )
  }

  renderRouterProps() {

  }

  render() {
    return (
      <div>
        <div className="ui two column stackable grid">
          <div className="column">
            <div className="ui segment">
              <form onSubmit={ e => {e.preventDefault()} } className="ui form">
                <Field name="title" component={this.renderInputText} label="Enter title" />
                <br/>
                <Field name="description" component={this.renderTextArea} label="Describe your stream" />
              </form>
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <form onSubmit={ e => {e.preventDefault()} } className="ui form">
                  <Field 
                    name="img-url" 
                    component={this.renderInputText} 
                    label="Enter image link"  
                  />                
              </form>
            </div>
          </div>
        </div>
        <br/>
        <div className="ui buttons">
          <button className="ui positive button">Save</button>
          {/* <div className="or"></div> */}
          <button className="ui negative button">Cancel</button>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'createStream'
})(StreamCreate)

