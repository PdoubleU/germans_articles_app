import PropTypes from 'prop-types';
import { Input } from './Input';
import { Label } from './Label';

export const FormField = ({
  label,
  name,
  id,
  type = 'text',
  onChangeHandler,
  ...props
}) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} onChange={onChangeHandler}></Input>
    </>
  );
};

FormField.prototype = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChangeHandler: PropTypes.func,
};
