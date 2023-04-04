import React, { Component } from 'react';
import '../css/LoginForm/LoginForm.css';
import logo from '../images/Logo.png';

class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        };
    }

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

    OnHandleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name] : value
        });
    }

    OnHandleFocus = (e) => {
        let target = e.target;
        let parent = target.parentElement;
        let nextSibling = parent.nextSibling
        nextSibling.style.display = 'none';
    }

    OnSubmitFormLogin = (e) => {
        e.preventDefault();
        this.props.OnSubmitFormLogin({
            username : this.state.username,
            password : this.state.password
        });
    }

    render() {
        return (
            <div className='login-form'>
                <form id='form-login'>
                    <a href=''>
                        <span className="login-form-logo">
                            <img src={logo} />
                        </span>
                    </a>
                    <span className='login-form-title'>Đăng nhập</span>
                    <div style={{marginBottom: '22px', position: 'relative'}}>
                        <div className='wrap-input'>
                            <input 
                                name="username" className="input"
                                id='input-username' 
                                placeholder='Nhập tài khoản' 
                                onBlur={this.OnBlurInput} 
                                onChange={this.OnHandleChange}
                                onFocus={this.OnHandleFocus}
                                />
                            <span className="focus-input" placeholder='&#xF007;' style={{fontFamily: "FontAwesome"}}></span>
                        </div>
                        <div className='span-validation-input-username' id='span-validation-input-username'>
                            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                        </div>
                        <div className='validation-input-username'>
                            <span>Vui lòng nhập tài khoản</span>
                        </div>                
                    </div>
                    <div style={{marginBottom: '22px', position: 'relative'}}>
                        <div className='wrap-input'>
                            <input 
                                name="password" 
                                type="password" 
                                placeholder='Nhập mật khẩu' 
                                className="input" 
                                onBlur={this.OnBlurInput} 
                                onChange={this.OnHandleChange}
                                onFocus={this.OnHandleFocus}
                                />
                            <span className="focus-input" placeholder='&#xf023;' style={{fontFamily: "FontAwesome"}}></span>
                        </div>  
                        <div className='span-validation-input-username' id='span-validation-input-password'>
                            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                        </div>
                        <div className='validation-input-username'>
                            <span>Vui lòng nhập mật khẩu</span>
                        </div>                    
                    </div>
                    <label className="container">Ghi nhớ tài khoản
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <div className='row-text-danger'>
                        <span className='text-danger'>Tên tài khoản hoặc mật khẩu không đúng</span>
                    </div>
                    <div className='row'>
                        <button type='button' onClick={this.OnSubmitFormLogin}>Đăng nhập</button>
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