import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './Input';
import { Label } from './Label';

const FormField = React.forwardRef(
  (
    {
      label,
      name,
      id,
      type = 'text',
      onChange,
      value,
      placeholder,
      selectedRadio,
      isAnswerCorrect,
    },
    ref
  ) => {
    return (
      <>
        <Label
          htmlFor={id}
          className={
            selectedRadio === id
              ? isAnswerCorrect
                ? 'positive'
                : 'negative'
              : null
          }
        >
          {label}
        </Label>
        <Input
          ref={ref}
          name={name}
          id={id}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          checked={selectedRadio === id}
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
