import React from 'react';

function FormField({ label, name, value, onChange }) {
  return (
    <label>
      {label}:
      <input type="text" name={name} onChange={onChange} value={value} />
    </label>
  );
}

export default FormField;