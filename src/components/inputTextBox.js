import * as React from 'react';
import { Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';
/**
 *
 * Material UI text filed control
 */
const TextBox = ({
  input: { value, ...restInput },
  label,
  meta: { touched, error },
  variant,
  margin,
  type,
  shrink,
  name,
  showEyeIcon,
  ...custom
}) => {

  return <TextField
      InputLabelProps={{
        shrink,
      }}
      color="secondary"
      name={name}
      label={label}
      variant={variant}
      onChange={(val) => {
        restInput.onChange(val);
      }}
      helperText={touched && error}
      error={touched && !!error}
      margin={margin || 'normal'}
      type={type}
      value={type !== 'file' ? value : undefined}
      {...restInput}
      {...custom}
    />
};

export const InputTextBox= (props) => {

  const { isformfield, required, validation, name, showEyeIcon, type, label, margin, variant, placeholder, onChange, fullWidth, className, shrink } = props;
  return !isformfield ? (
    <TextField
      name={name}
      type={type || 'text'}
      label={label}
      margin={margin || 'normal'}
      variant={variant || 'outlined'}
      placeholder={placeholder}
      onChange={(val) => onChange(val)}
      fullWidth={fullWidth}
      className={className}
      color="secondary"
      InputLabelProps={{
        shrink,
      }}
    />
  ) : (
    <Field
      name={name}
      label={label}
      type={type || 'text'}
      placeholder={placeholder}
      required={required}
      component={TextBox}
      validate={validation}
      variant={variant}
      fullWidth={fullWidth}
      className={className}
      shrink={shrink}
      showEyeIcon={showEyeIcon}
    />
  );
};
