import React from 'react';
// import { bool, node, shape, string } from 'prop-types';

const Field = props => {
    const { children } = props;

    return (
        <div>
            {children}
        </div>
    );
};

// Field.propTypes = {
//     children: node,
//     classes: shape({
//         label: string,
//         root: string
//     }),
//     id: string,
//     label: node,
//     optional: bool
// };

export default Field;
