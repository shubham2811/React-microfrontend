import * as React from 'react';
import { reduxForm, propTypes } from 'redux-form';

const Form =(props)=>{
    const { children, handleSubmit, onKeyPress, className } = props;
    return (
      <form
        onSubmit={handleSubmit}
        onKeyPress={onKeyPress}
        autoComplete="off"
        noValidate
        className={className}
      >
        {children}
      </form>
    );
}

export default reduxForm({
  enableReinitialize: true,
})(Form);
