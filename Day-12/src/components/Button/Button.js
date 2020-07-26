import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
    handleClick = () => {
        this.props.clickHandler(this.props.name);
    }

    render() {
        const classNames = [
            'component-button',
            this.props.orange ? 'orange' : '',
            this.props.wide ? 'wide' : '',
        ];
        return (
            <div className={classNames.join(' ').trim()}>
                <button onClick={this.handleClick}>
                    {this.props.name}
                </button>
            </div>
        );
    }
}

Button.propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
};

export default Button;