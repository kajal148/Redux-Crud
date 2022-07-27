import React from 'react';
import {Field, reduxForm} from 'redux-form'; 

class StreamForm extends React.Component{

  renderError({touched, error}){
    if(touched && error){
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );    
    }

    return null;
  }

  renderInput = ({input, label, meta}) => {

    const className = `field ${meta.touched && meta.error ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render(){
    
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
        <Field name='title' 
          component={this.renderInput}
          label="Title"/>
        <Field name='description'
          component={this.renderInput}
          label="Enter Description"/>
        <button className='ui button primary'>Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if(formValues.title === undefined || formValues.title === ''){
    errors.title = "Title cannot be empty";
  }else if(formValues.description === undefined || formValues.description === ''){
    errors.description = 'Description cannot be empty';
  }

  return errors;
}

export default reduxForm({
  form : 'streamForm',
  validate: validate
})(StreamForm);