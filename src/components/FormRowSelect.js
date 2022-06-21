import React from 'react'

const FormRowSelect = ({labelText,name,value,handleChange,list}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((optionValue, index) => {
          return (
            <option key={index} value={optionValue}>
              {optionValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormRowSelect