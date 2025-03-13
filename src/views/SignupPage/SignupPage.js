import React from "react";
import './SignupPage.css';
import {
    NavLink
} from "react-router-dom";

class SignupPage extends React.Component {

    state = {
        showPassword: false
    }

    togglePassword = () => {
        const passwordInput = document.getElementById('password');
        const passwordToggle = document.getElementById('password-toggle');
        if (this.state.showPassword) {
            passwordInput.type = 'password';
            passwordToggle.innerHTML = '️:D';
        } else {
            passwordInput.type = 'text';
            passwordToggle.innerHTML = '️:X';
        }
        this.setState({
            showPassword: !this.state.showPassword
        });
    }

    render() {
        let { showPassword } = this.state;
        return (
            <div className="signup__coverdiv">
                <form className="signup__container">
                    <h4>
                        ĐĂNG KÝ
                    </h4>
                    <div className="signup__input">
                        <label htmlFor="name">Họ và tên </label>
                        <input id="name" type="text" name="name" placeholder="Họ tên đầy đủ" required />
                    </div>
                    <div className="signup__input">
                        <label htmlFor="email">Email </label>
                        <input id="email" type="email" name="email" placeholder="Nhập email" required />
                    </div>
                    <div className="signup__input password-input-wrapper">
                        <label htmlFor="password">Mật khẩu </label>
                        <input id="password" type={showPassword ? "text" : "password"} name="password" placeholder="Nhập mật khẩu" required />
                        <span className="password-toggle" id="password-toggle">️:D</span>
                    </div>
                    <div className="signup__input password-input-wrapper">
                        <label htmlFor="re-password">Nhập lại mật khẩu </label>
                        <input id="re-password" type={showPassword ? "text" : "password"} name="re-password" placeholder="Nhập lại mật khẩu" required />
                        <span className="password-toggle" id="password-toggle" onClick={() => this.togglePassword()}>️:D</span>
                    </div>
                    <button type="submit" id="signUpBtn">ĐĂNG KÝ</button>
                    <a href="/signin">Đăng nhập</a>
                    <NavLink to='/signin' activeClassName='active' exact={true} ></NavLink>

                </form>
            </div>
        );
    }
}

export default SignupPage;