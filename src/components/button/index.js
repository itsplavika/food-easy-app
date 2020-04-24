import * as React from 'react';
import './button.css';

class Button extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
        e.preventDefault();
        const { clickHandler } = this.props;
        if (clickHandler && typeof clickHandler === 'function') {
            clickHandler(e);
        }
    }

    render() {
        const {
            className,
            buttonText,
        } = this.props;

        return (
            <button
                className={`btn ${className}`}
                onClick={this.clickHandler}
            >
                {buttonText}
            </button>
        );
    }
}

export default Button;
