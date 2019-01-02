import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends Component {
  
  state = {
    imgUrl: 'https://semantic-ui.com/images/wireframe/image.png'
  }

  renderInputText = (formProps) => {
    console.log(formProps)
    
    this.setState({
      imgUrl: formProps.input.value
    })
    
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

  renderImage = (formProps) => {
    return (
      <div style={{width: '100%', height: 'auto', position: 'relative'}}>
        <img src={this.state.imgUrl} alt="" style={{ width: '100%'}} />
      </div>
    )
  }

  render() {
    return (
      <div className="ui two column grid">
        <div className="column">
          <div className="ui segment">
            <form action="" className="ui form">
              <Field name="title" component={this.renderInputText} label="Enter title" />
              <br/>
              <Field name="description" component={this.renderTextArea} label="Describe your stream" />
            </form>
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <form action="" className="ui form">
                <Field name="img-url" component={this.renderInputText()} label="Enter image link" />
                <br/>
                <Field name="image" component={this.renderImage} />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'createStream'
})(StreamCreate)

