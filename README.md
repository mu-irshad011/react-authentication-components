# React Authentication Component

A reusable authentication form component for React.

## Installation

To install the `react-authentication-component` package, run the following command:

````bash
npm install react-authentication-component
````

## Usage

Import the `Form` component from `react-authentication-component` and use it in your React application.

```jsx
import React from "react";
import {Form, yup} from "react-authentication-component";

const handleFormSubmit = (values) => {
  // Handle form submission logic here
};

const App = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Form
        onSubmit={handleFormSubmit}
        fields={["email", "password"]}
        validationSchema={yourValidationSchema}
        fieldClasses={["field-class", "field-class"]}
        cardClass="card-container"
        buttonClass="submit-button"
      />
    </div>
  );
};

export default App;
```

## Props

The `Form` component accepts the following props:

- `onSubmit` (required): A function to handle form submission.
- `fields` (required): An array of field names to render in the form.
- `validationSchema`: A Yup validation schema for form validation.
- `fieldClasses`: An array of class names for individual field styling.
- `cardClass`: A class name for the container or card element wrapping the form.
- `buttonClass`: A class name for the submit button.

## Styling

The `Form` component provides options for customizing the styling of various elements. You can apply custom styles by providing class names or using CSS to target the component's elements.

### Field Styling

To apply custom styles to individual fields, use the `fieldClasses` prop. Pass an array of class names, with each class name corresponding to a field in the `fields` prop. For example:

```jsx
<Form
  fields={["email", "password"]}
  fieldClasses={["email-field", "password-field"]}
/>
```

### Card Styling

To apply styles to the container or card element wrapping the form, use the `cardClass` prop. Provide a class name that represents the desired styling for the card. For example:

```jsx
<Form cardClass="card-container" />
```

### Button Styling

To style the submit button, use the `buttonClass` prop. Provide a class name to apply custom styles to the button. For example:

```jsx
<Form buttonClass="submit-button" />
```

You can define your custom styles in CSS files or CSS modules and import them into your project.

## Examples

For more usage examples, refer to the [examples folder](https://github.com/mu-irshad011/react-authentication-components/tree/main/src/example) in the GitHub repository.

## License

MIT © [https://github.com/mu-irshad011](https://github.com/https://github.com/mu-irshad011)
