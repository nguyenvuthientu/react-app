import React, {Component} from 'react';
import './../css/MainNavMobile/MainNavMobile.css';

class MainNavMobile extends Component{

    OpenLoginForm1 = () => {
        this.props.OpenLoginForm();
    }

    render(){
        let loggedInObj = null;
        let loggedIn = false;
        let loggedInCache = localStorage.getItem('isLoggedIn');

        if(loggedInCache){
            
            loggedInObj = JSON.parse(loggedInCache);
            loggedIn = loggedInObj.isLoggedIn;
        }

        return(
            <div className='main-nav-mobile' id='main-nav-mobile'>
                {
                    loggedIn ? (
                        <div>
                            <div className='main-nav-mobile-signin'>
                                <i className='fa fa-user'></i> <a href='#'>NGUYỄN VŨ THIÊN TÚ</a>
                            </div>
                            <div className='main-nav-change-password'>
                                <div className='main-nav-mobile-signin'>
                                    <i className='fa fa-user'></i> <a href='#'>Thay đổi mật khẩu</a>
                                </div>
                                <div className='main-nav-mobile-signin'>
                                    <a href='#'>Đăng xuất</a> <i className="fa fa-sign-out" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    
                ) : <div className='main-nav-mobile-signin' onClick={this.OpenLoginForm1}>
                    <i className='fa fa-sign-in fa-lg'></i> <a href='#'>Đăng nhập</a>
                </div>
                }
                
                <ul className='main-nav-mobile-menu'>
                    <li><a href=''>VỀ BOSCHARETE</a></li>
                    <li><a href=''>CHỨC NĂNG</a></li>
                    <li><a href=''>LIÊN HỆ</a></li>
                </ul>
            </div>
        )
    }
}

export default MainNavMobile;