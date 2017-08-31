import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
    render() {
        return (
            // <h2>Welcome to React</h2>
            <div>
                <h2 style={
                    {
                        backgroundColor: this.props.highlighted ?
                            'yellow' :
                            'white',
                        fontSize: `${this.props.fontSize}px`
                    }
                } > {this.props.titleText}
                </h2>
                <h3>{this.props.children}</h3>
            </div>
        );
    }

    static propTypes = {
        // titleText: PropTypes.string // optional
        titleText: PropTypes.string.isRequired, // required
        highlighted: PropTypes.bool,
        fontSize: PropTypes.number,
        children: PropTypes.node.isRequired
        // Other examples
        // fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        // size: PropTypes.oneOf([
        //     'small',
        //     'medium',
        //     'large'
        // ]),
        // simpleArray: PropTypes.array,
        // simpleObject: PropTypes.object,
        // arrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
        // complexObject: PropTypes.shape({
        //     id: PropTypes.number,
        //     name: PropTypes.string
        // })
    }

    static defaultProps = {
        highlighted: false,
        fontSize: 18
    }
};