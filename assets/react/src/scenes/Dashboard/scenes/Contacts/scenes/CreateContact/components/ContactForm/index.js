import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, FormGroup, Label, Alert } from 'reactstrap';
import './ContactForm.css';


const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);
const FileInput = ({
                     input: { value: omitValue, onChange, onBlur, ...inputProps },
                     meta: omitMeta,
                     ...props
                   }) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
  );
};


let ContactForm = props => {
  const { handleSubmit, createStatus, message } = props;

  return (
    <Form onSubmit={handleSubmit} className="contact-form">
      {
        createStatus.error ?
          (<Alert color="danger">
            {message}
          </Alert>) : ''
      }
      <FormGroup>
        <Label for="name">Name</Label>
        <Field name="name" component="input" type="text" className="form-control"/>
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone</Label>
        <Field name="phone" component="input" type="tel" className="form-control"/>
      </FormGroup>
      <FormGroup>
        <Label for="image">Avatar</Label>
        <Field name="image" className="form-control-file" accept='.jpg, .png, .jpeg' component={FileInput} type="file"/>
      </FormGroup>
      <Button color="primary">Add</Button>
    </Form>
  )
};

ContactForm = reduxForm({
  form: 'contactForm'
})(ContactForm);

export default ContactForm;
