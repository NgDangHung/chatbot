import React from "react";
import './SigninPage.css';
import {
    NavLink
} from "react-router-dom";

class SigninPage extends React.Component {

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

            <div className="signin__coverdiv">
                <form className="signin__container">
                    <h4>
                        ĐĂNG NHẬP
                    </h4>
                    <div className="signin__input">
                        <label htmlFor="email">Email </label>
                        <input id="email" type="email" name="email" placeholder="Nhập email" required />
                    </div>
                    <div className="signin__input password-input-wrapper">
                        <label htmlFor="password">Mật khẩu </label>
                        <input id="password" type={showPassword ? "text" : "password"} name="password" placeholder="Nhập mật khẩu" required />
                        <span className="password-toggle" id="password-toggle" onClick={() => this.togglePassword()}>:D
                        </span>
                    </div>
                    <button type="submit" id="signInBtn">ĐĂNG NHẬP</button>
                    <p>Bạn chưa có tài khoản? <a href="/signup">Đăng ký</a></p>
                    <NavLink to='/signup' activeClassName='active' exact={true} ></NavLink>

                </form>
            </div>
        )
    }
}


export default SigninPage;