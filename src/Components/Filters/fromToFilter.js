import React from 'react';

const filter = (props) => {
    const options = props.options.map((option, index) => {
        return <option key={index} value={option}>{option}</option>
    });

    let lastOptionValue = props.options[props.options.length - 1];
    let lastOption = <option selected="selected" key={props.options.length - 1} value={lastOptionValue}>{lastOptionValue}</option>;
    let optionsTo = options.slice();
    optionsTo[optionsTo.length - 1] = lastOption;

    return (
        <div className="row">
        <div className="form-group-custom col-6">
            <label htmlFor={props.idFrom}>{props.labelFrom}</label>
            <select className="form-control form-control-sm" id={props.idFrom} name={props.requestNameFrom}>
                {options}
            </select>
        </div>
        <div className="form-group-custom col-6">
            <label htmlFor={props.idTo}>{props.labelTo}</label>
            <select className="form-control form-control-sm" id={props.idTo} name={props.requestNameTo}>
                {optionsTo}
            </select>
        </div>
    </div>
    );
};

export default filter;