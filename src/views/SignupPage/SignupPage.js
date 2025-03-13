import React from "react";
import './SignupPage.css';
import {
    NavLink
} from "react-router-dom";

class SignupPage extends React.Component {
    render() {
        return (
            // <>
            //     <form className="signup__container">
            //         <h4>
            //             ĐĂNG KÝ
            //         </h4>
            //         <div className="signup__input">
            //             <label htmlFor="name">Họ và tên *</label>
            //             <input id="name" type="text" name="name" placeholder="Họ tên đầy đủ" required />
            //         </div>
            //         <div className="signup__input">
            //             <label htmlFor="email">Email *</label>
            //             <input id="email" type="email" name="email" placeholder="Nhập email" required />
            //         </div>
            //         <div className="signup__input">
            //             <label htmlFor="password">Mật khẩu *</label>
            //             <input id="password" type="password" name="password" placeholder="Nhập mật khẩu" required />
            //         </div>
            //         <div className="signup__input">
            //             <label htmlFor="re-password">Nhập lại mật khẩu *</label>
            //             <input id="re-password" type="password" name="re-password" placeholder="Nhập lại mật khẩu" required />
            //         </div>
            //         <button type="submit" id="signUpBtn">ĐĂNG KÝ</button>
            //         <a href="/signin">Đăng nhập</a>
            //         <NavLink to='/signin' activeClassName='active' ></NavLink>

            //     </form>

            // </>
            <div className="signup__coverdiv">
                <form className="signup__container">
                    <h4>
                        ĐĂNG KÝ
                    </h4>
                    <div className="signup__input">
                        <label htmlFor="name">Họ và tên *</label>
                        <input id="name" type="text" name="name" placeholder="Họ tên đầy đủ" required />
                    </div>
                    <div className="signup__input">
                        <label htmlFor="email">Email *</label>
                        <input id="email" type="email" name="email" placeholder="Nhập email" required />
                    </div>
                    <div className="signup__input">
                        <label htmlFor="password">Mật khẩu *</label>
                        <input id="password" type="password" name="password" placeholder="Nhập mật khẩu" required />
                    </div>
                    <div className="signup__input">
                        <label htmlFor="re-password">Nhập lại mật khẩu *</label>
                        <input id="re-password" type="password" name="re-password" placeholder="Nhập lại mật khẩu" required />
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