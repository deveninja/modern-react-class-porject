import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends Component {

  renderInputText = ({input, label, meta}) => {
    console.log(meta)
    if(input.name === 'img-url'){
      return (
        <div className="Field">
          <label>{label}</label>
          <input {...input} />
          <div className="ui error">{meta.error}</div>

            <div style={{
              width: '100%',
              height: '300px', 
              marginTop: '1rem', 
              backgroundImage: `url(${input.value})`, 
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
        <label>{label}</label>
        <input {...input} />      
        <div className="ui error">{meta.error}</div>
      </div>
    )
  }

  renderTextArea({input, label, meta}) {
    return (
      <div className="Field">
        <label>{label}</label>
        <textarea {...input} />
        <div className="ui error">{meta.error}</div>
      </div>
    )
  }

  onSubmit = (formValues) => {
    console.log(formValues)
    // event.preventDefault() @Redux-form handled the prevent default for us
  }

  renderRouterProps() {

  }

  render() {
    return (
        <form onSubmit={ this.props.handleSubmit(this.onSubmit) } className="ui form">
          <div className="ui two column stackable grid">
            <div className="column">
              <div className="ui segment">
                
                  <Field name="title" component={this.renderInputText} label="Enter title" />
                  <br/>
                  <Field name="description" component={this.renderTextArea} label="Describe your stream" />
                
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                
                    <Field 
                      name="img-url" 
                      component={this.renderInputText} 
                      label="Enter image link"  
                    />                
                
              </div>
            </div>
          </div>
          
          <div className="ui buttons">
            <button className="ui positive button">Save</button>
            {/* <div className="or"></div> */}
            <button className="ui negative button">Cancel</button>
          </div>
        </form>
      
    )
  }
}

const validate = (formValues) => {
  const errors = {}

  if(!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if(!formValues.description) {
    errors.description = 'You must enter a description'
  }

  return errors
}


export default reduxForm({
  form: 'createStream',
  validate
})(StreamCreate)

