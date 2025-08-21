import React, { Fragment } from 'react';
// import { node, shape, string } from 'prop-types';
// import useFieldState from './useInformedFieldStateWrapper';

import classes from './textInput.module.css';

const TextInput = props => {
    const {
        classes: propClasses,
        field,
        message,
        value,
        ...rest
    } = props;
    // const fieldState = useFieldState(field);
    // const inputClass = fieldState.error ? classes.input_error : classes.input;

    return (
        <Fragment>
                <input className={`${propClasses?.input || ""} ${classes.input || ""}`}
                       value={value ?? ""}
                       onChange={(e) => onChange?.(e.target.value)}
                       {...rest}
                />
        </Fragment>
    );
};

export default TextInput;

// TextInput.propTypes = {
//     after: node,
//     before: node,
//     classes: shape({
//         input: string
//     }),
//     field: string.isRequired,
//     message: node
// };
