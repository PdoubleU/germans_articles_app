import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../reusables/Input';
import { Label } from './Label';

const FormField = React.forwardRef(
  ({ label, name, id, type = 'text', onChange, value, placeholder }, ref) => {
    return (
      <>
        <Label htmlFor={id}>{label}</Label>
        <Input
          ref={ref}
          name={name}
          id={id}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          props="body"
          width="auto"
        ></Input>
      </>
    );
  }
);

FormField.prototype = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

export default FormField;
