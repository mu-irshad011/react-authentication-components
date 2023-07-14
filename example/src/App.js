import React from 'react'

import { Form, yup } from 'react-authentication-component'
import "./index.css";

const App = () => {
  return (
    <Form
      fields={['email', 'password']}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .email('Invalid email!')
          .required('Email is required!'),
        password: yup
          .string()
          .required('Password is required!')
          .min(6, 'Password must contain minimum of 6 characters!')
      })}
      onSubmit={(values) => console.log('values: ', values)}
      cardClass="border border-thick p-5 text-center m-auto"
      // fieldClasses={["m-1", "m-1"]}
      buttonClass="btn btn-primary"
      labelOnTop
    />
  )
}

export default App
