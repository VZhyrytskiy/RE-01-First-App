import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => (
    <div>
        <h2 style={
            {
                backgroundColor: props.highlighted ?
                    'yellow' :
                    'white',
                fontSize: `${props.fontSize}px`
            }
        } > {props.titleText}
        </h2>
        <h3>{props.children}</h3>
    </div>
);

Title.propTypes = {
    titleText: PropTypes.string.isRequired,
    highlighted: PropTypes.bool,
    fontSize: PropTypes.number,
    children: PropTypes.node.isRequired
};

export default Title;
