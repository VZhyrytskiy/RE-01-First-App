import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title.func';

export default class NewsItem extends Component {

    constructor(props) {
        super(props);

        // internal state
        this.state = {
            expanded: false
        };

        this.onClick = this.onClick.bind(this);
    }

    // lifecycle
    // 1. componentWillMount (This method is a good place to do things such as set up timers needed by the component or request data the component needs from the server)
    // 2. render (converts the JSX element output to HTML elements and places them in the DOM.)
    // 3. componentDidMount (This is often an integration point for non-React libraries.)
    // 4. componentWillReceiveProps (The first method called during a property update cycle. This lifecycle method is a good place to update state that is somehow derived from props because it is the only update lifecycle method that is not called for both prop and state changes.)
    // 5. shouldComponentUpdate (This method is called when either props or state are updated. If the method returns true, the lifecycle continues as we expect it. However, if shouldComponentUpdate returns false, the lifecycle is short-circuited here and a re-render does not occur.)
    // 6. componentWillUpdate (The last step before re-rendering.)
    // 7. render (re-render component)
    // 8. componentDidUpdate (This method is very similar to componentWillUpdate, except that it receives the previous properties and state as arguments)
    // 9. componentWillUnmount (Optional. Just before a component is removed from the DOM, the final stage of the component's ifecycle will be completed. This method is a good place to clean up anything that the component created over the course of its life.)

    componentWillMount() {

    }

    componentWillReceiveProps(nextProps) {
        // an object of new props
        console.log(nextProps);

        // The current (old) props
        console.log(this.props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // if (this.props.titleText !== nextProps.titleText) {
        //     return true;
        // }
        // return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        // Prepare for render
    }

    componentDidUpdate(prevProps, prevState) {
         // an object of old props
         console.log(prevProps);

        // The current (new) props
        console.log(this.props);
    }

    onClick(event) {
        console.log(`Click event:`, event);

        // change internal state
        this.setState({
            expanded: !this.state.expanded
        });
    }

    renderBody() {
        if (this.state.expanded) {
            return (
                <div>Body</div>
                // <Byline />
                // <Description />
            );
        }
        return null;
    }

    render() {
        return (
            <div className="news-item"
                onClick={this.onClick}>
                {/* <Image /> */}
                <Title
                    titleText={this.props.titleText}
                    highlighted={true}
                >
                    Some text for children property
                </Title>
                {this.renderBody()}
            </div>
        );
    }

    static propTypes = {
        titleText: PropTypes.string.isRequired,
    }
}