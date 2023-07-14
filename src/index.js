import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import { Formik, Form as FormView, Field } from 'formik'
import * as Yup from 'yup'
export const yup = Yup

export const Form = ({
  onSubmit,
  fields,
  validationSchema,
  fieldClasses,
  cardClass,
  buttonClass,
  labelOnTop,
  hideLabel
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFormSubmit = (values, { setSubmitting }) => {
    setIsSubmitted(true)
    onSubmit(values)
    setSubmitting(false)
  }

  const generateDefaultValidationSchema = () => {
    const schemaObject = {}

    fields.forEach((field) => {
      schemaObject[field] = yup.string().required(`${field} is required`)
      // You can customize the validation rules for each field based on your requirements
      // For example, you can add additional rules like email validation for the 'email' field
    })

    return yup.object().shape(schemaObject)
  }

  const schema = validationSchema || generateDefaultValidationSchema()

  return (
    <Formik
      initialValues={fields.reduce((values, field) => {
        values[field] = ''
        return values
      }, {})}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
      validateOnChange={!isSubmitted} // Validate on change if the form has been submitted
      validateOnBlur={isSubmitted} // Validate on blur if the form has been submitted
    >
      {(formikProps) => (
        <FormView className={cardClass || 'bg-dark'}>
          <div>
            {fields.map((field, index) => (
              <div
                key={field}
                className={
                  fieldClasses
                    ? labelOnTop
                      ? `${fieldClasses[index]} d-flex flex-column`
                      : `${fieldClasses[index]}`
                    : 'd-flex'
                }
              >
                {!hideLabel && (
                  <label htmlFor={field} className='text-start'>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                )}
                <Field
                  type={field === 'password' ? 'password' : 'text'}
                  id={field}
                  name={field}
                  className={fieldClasses ? fieldClasses[index] : 'form form-control'}
                />
                {formikProps.errors[field] && formikProps.touched[field] && (
                  <div className='text-danger'>{formikProps.errors[field]}</div>
                )}
              </div>
            ))}
            <button
              type='submit'
              className={buttonClass}
              // disabled={!formikProps.isValid || formikProps.isSubmitting}
            >
              Login
            </button>
          </div>
        </FormView>
      )}
    </Formik>
  )
}
