import React, { Component, createRef } from "react";
import showIcon from '../assets/img/eye-solid.svg';
import hideIcon from '../assets/img/eye-slash-solid.svg';

class PasswordToggle extends Component {
    constructor(props) {
        super(props);
        this.state = { showPassword: false };
        this.passwordRef = createRef();
    }

    togglePassword = () => {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword
        }));
    };

    render() {
        let { showPassword } = this.state;
        let { id, name, placeholder } = this.props

        return (
            <>
                <input
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    ref={this.passwordRef}
                    type={showPassword ? "text" : "password"}
                    required
                />
                <span className="password-toggle" onClick={this.togglePassword}>
                    <img src={showPassword ? hideIcon : showIcon} alt="Toggle Password Visibility" />
                </span>
            </>
        );
    }
}

export default PasswordToggle;
