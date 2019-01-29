import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createStream } from '../../../actions'

class StreamCreate extends Component {

  renderInputText = ({input, label, meta}) => {
    // console.log(meta)
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    if(input.name === 'img'){
      return (
        <div className={className}>
          <label>{label}</label>
          <input {...input} />
          { this.renderError(meta) }          
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
      <div className={className}>
        <label>{label}</label>
        <input {...input} />      
        { this.renderError(meta) }        
      </div>
    )
  }

  renderTextArea = ({input, label, meta}) => {
    // console.log(meta)
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} />
        { this.renderError(meta) }
      </div>
    )
  }

  onSubmit = (formValues) => {
    // console.log(formValues)
    // event.preventDefault() @Redux-form handled the prevent default for us
    this.props.createStream(formValues)
  }

  renderError = ({ error, touched }) => {
    if( touched && error ) {
      
      return (
        <div className="ui error message">{error}</div>
      )
    } 
  }

 

  render() {
    return (
        <form onSubmit={ this.props.handleSubmit(this.onSubmit) } className="ui form success error">
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
                      name="img" 
                      component={this.renderInputText} 
                      label="Enter image link"  
                    />                
                
              </div>
            </div>
          </div>

          
          <div className="ui segment no-border no-shadow">
            <button className="ui positive button float-left">Add</button>
          
         
            <button className="ui negative button float-right">Cancel</button>
          </div>
        </form>
      
    )
  }
}

const validate = formValues => {
  const errors = {}

  if(!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if(!formValues.description) {
    errors.description = 'You must enter a description'
  }

  if(!formValues.img) {
    errors.img = 'You must enter a valid link'
  }

  return errors
}


const formWrapped = reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate)

export default connect(null, { createStream })(formWrapped)

