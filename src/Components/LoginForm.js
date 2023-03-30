import React, { Component } from 'react';
import '../css/LoginForm/LoginForm.css';
import logo from '../images/Logo.png';

class LoginForm extends Component {

    OnBlurInput = (e) => {
        let value = e.target.value;
        if(value.trim() !== ''){
            let classListInput = e.target.classList;
            if (!classListInput.contains('has-val')){
                classListInput.add('has-val');
            }
        }
        else{
            let classListInput = e.target.classList;
            if (classListInput.contains('has-val')){
                classListInput.remove('has-val');
            }
        }
    }

    render() {
        return (
            <div className='login-form'>
                <form>
                    <a href=''>
                        <span className="login-form-logo">
                            <img src={logo} />
                        </span>
                    </a>
                    <span className='login-form-title'>Đăng nhập</span>
                    <div style={{marginBottom: '22px'}}>
                        <div className='wrap-input'>
                            <input className="input" placeholder='Nhập tài khoản' onBlur={this.OnBlurInput} />
                            <span className="focus-input" placeholder='&#xF007;' style={{fontFamily: "FontAwesome"}}></span>
                        </div>                    
                    </div>
                    <div style={{marginBottom: '22px'}}>
                        <div className='wrap-input'>
                            <input type="password" placeholder='Nhập mật khẩu' className="input" onBlur={this.OnBlurInput} />
                            <span className="focus-input" placeholder='&#xf023;' style={{fontFamily: "FontAwesome"}}></span>
                        </div>
                    </div>
                    <label className="container">Ghi nhớ tài khoản
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <div className='row'>
                        <button type='button'>Đăng nhập</button>
                    </div>
                    <div className='row'>
                        <a href='' className='rePass'>Quên mật khẩu</a>
                        <b style={{color: "#fff"}}>&nbsp;|&nbsp;</b>
                        <a href='' className='rePass'>Lấy lại tài khoản</a>
                    </div>
                    <div className='row'>
                        <a href='' className='rePass'>Hướng dẫn thanh toán</a>            
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;