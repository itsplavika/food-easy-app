import * as React from 'react';
import './input.css';

const Input = (props) => {
  const {
    type,
    id,
    placeholder,
    className,
    ref,
    pattern,
    required,
  } = props;

  return (
    <>
      <input
        type={type ? type : 'text'}
        id={id}
        className={`inputBox ${className}`}
        placeholder={placeholder}
        ref={ref}
        pattern={pattern}
        required={required}
      />
      {/* {error && <span className="error">{error}</span>} */}
    </>
  )
}

export default Input;