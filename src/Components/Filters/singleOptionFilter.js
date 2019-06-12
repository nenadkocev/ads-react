import React from 'react';

const singleOptionFilter = (props) => {
  const options = props.options.map((option, index) => {
     return <option key={index} value={option}>{option}</option>
  });

  return (
      <div className="form-group-custom">
          <label htmlFor={props.id}>{props.labelName}</label>
          <select
              disabled={props.disabled}
              className="form-control form-control-sm"
              id={props.id}
              name={props.requestName}
                onChange={props.onClick ? (e) => props.onClick(e.target.value) : null}>
              {options}
          </select>
      </div>
  );
};

export default singleOptionFilter;