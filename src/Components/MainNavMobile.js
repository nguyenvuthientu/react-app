import React, {Component} from 'react';
import './../css/MainNavMobile/MainNavMobile.css';

class MainNavMobile extends Component{
    render(){
        return(
            <div className='main-nav-mobile' id='main-nav-mobile'>
                <div className='main-nav-mobile-signin'>
                    <i className='fa fa-sign-in fa-lg'></i> <a href='#'>Đăng nhập</a>
                </div>
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