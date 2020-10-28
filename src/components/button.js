import * as React from 'react';
import Buttons from '@material-ui/core/Button';
export const Button = (props) => {
  const {
    color,
    children,
    disabled,
    onClick,
    variant,
    type,
    fullWidth,
    className,
    autoFocus,
  } = props;
  return type === 'submit' ? (
    <Buttons
      className={className}
      fullWidth={fullWidth}
      type={type}
      color={color || 'primary'}
      variant={variant || 'contained'}
      disabled={disabled}
     
      {...props}
    >
      {children}
    </Buttons>
  ) : (
    <Buttons
      type={type}
      className={className}
      onClick={(e) => onClick(e)}
      color={(color) || 'primary'}
      variant={variant || 'contained'}
      disabled={disabled}
      autoFocus={autoFocus}
    
      {...props}
    >
      {children}
    </Buttons>
  );
};
