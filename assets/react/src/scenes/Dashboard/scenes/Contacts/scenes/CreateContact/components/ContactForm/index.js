import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">First Name</label>
        <Field name="name" component="input" type="text"/>
      </div>
      <div>
        <label htmlFor="phone">Last Name</label>
        <Field name="phone" component="input" type="text"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
};

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm);

export default ContactForm;
