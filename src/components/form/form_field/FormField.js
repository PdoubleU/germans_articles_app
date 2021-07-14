import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Input } from './Input';
import { Label } from './Label';

const FormField = forwardRef(
  ({ label, name, id, type = 'text', onChange, value }, ref) => {
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
