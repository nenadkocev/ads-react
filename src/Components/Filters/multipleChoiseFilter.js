import React from 'react';

const multipleChoiseFilter = (props) => {
    const choises = props.options.map((option, index) => {
        return (
            <div className="form-check" key={index}>
                <input className="form-check-input" id={option} type="checkbox" name={props.requestName} value={option}/>
                <label className="form-check-label" htmlFor={option}>{option}</label>
            </div>
        );
    });

    var style = {
        textAlign: 'left'
    };
    return (
        <fieldset style={style}>
            <legend>{props.legendDescription}</legend>
            {choises}
        </fieldset>
    );
};

export default multipleChoiseFilter;