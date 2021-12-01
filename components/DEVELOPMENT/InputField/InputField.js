import React from 'react';

import { Input, Textarea, Select } from 'components';

export const InputField = ({
  type,

  id,
  className,
  style,

  value,
  placeholder,
  name,
  required,

  label,
  valid,
  info,

  rows,

  onChange,
  disabled,
}) => {
  switch (type) {
    case 'input':
      return (
        <Input
          id={id}
          className={className}
          style={style}
          value={value}
          placeholder={placeholder}
          name={name}
          required={required ? true : false}
          label={label}
          valid={valid}
          info={info}
          onChange={onChange}
          disabled={disabled ? true : false}
        />
      );
    case 'password':
      return (
        <Input
          type="password"
          id={id}
          className={className}
          style={style}
          value={value}
          placeholder={placeholder}
          name={name}
          required={required ? true : false}
          label={label}
          valid={valid}
          info={info}
          onChange={onChange}
          disabled={disabled ? true : false}
        />
      );
    case 'textarea':
      return (
        <Textarea
          id={id}
          className={className}
          style={style}
          value={value}
          placeholder={placeholder}
          name={name}
          required={required ? true : false}
          label={label}
          valid={valid}
          info={info}
          onChange={onChange}
          rows={rows}
          disabled={disabled ? true : false}
        />
      );
    case 'select':
      return (
        <Select
          id={id}
          className={className}
          style={style}
          value={value}
          label={label}
          required={required ? true : false}
          onClick={onClick}
          disabled={disabled ? true : false}
        />
      );
    default:
      return (
        <Input
          id={id}
          className={className}
          style={style}
          value={value}
          placeholder={placeholder}
          name={name}
          required={required ? true : false}
          label={label}
          valid={valid}
          info={info}
          onChange={onChange}
          disabled={disabled ? true : false}
        />
      );
  }
};
