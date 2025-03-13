import React from "react";
import './SigninPage.css';
import {
    NavLink
} from "react-router-dom";

class SigninPage extends React.Component {
    render() {
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
                    <div className="signin__input">
                        <label htmlFor="password">Mật khẩu </label>
                        <input id="password" type="password" name="password" placeholder="Nhập mật khẩu" required />
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