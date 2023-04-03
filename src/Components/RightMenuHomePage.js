import React, {Component} from 'react';
import './../css/RightMenuHomePage/RightMenuHomePage.css';

class RightMenuHomePage extends Component{

    OpenLoginForm = () => {
        this.props.OpenLoginForm();
    }

    OnHandleMouseOver = () => {
        let userLoggedInContent = document.getElementById('user-loggedIn-content');
        if(userLoggedInContent){
            userLoggedInContent.style.display = "block";
        }
    }

    OnHandleMouseOut = () => {
        let userLoggedInContent = document.getElementById('user-loggedIn-content');
        if(userLoggedInContent){
            userLoggedInContent.style.display = "none";
        }
    }

    OnSignOut = () => {
        this.props.OnSignOut();
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
            <div className="right-menu-homepage">
                <div className="right-menu-item">
                    <i className="fa fa-phone fa-lg"></i> <a href='#'>1980-50-57-22</a>
                </div>
                <div className="right-menu-item" 
                    onClick={this.OpenLoginForm}
                    onMouseOver={this.OnHandleMouseOver}
                    onMouseOut={this.OnHandleMouseOut}
                >
                    <i className={loggedIn ? 'fa fa-user' : 'fa fa-sign-in fa-lg'}></i> <a>
                        {loggedIn ? 'NGUYỄN VŨ THIÊN TÚ' : 'Đăng nhập'}</a>
                    {loggedIn ? <i className="fa fa-caret-down" aria-hidden="true"></i> : null}
                    {
                        loggedIn ? <div className='user-loggedIn-content' id="user-loggedIn-content">
                        <ul>
                            <li className='li-forgot-password'>
                                <i className="fa fa-key" aria-hidden="true"></i> Thay đổi mật khẩu</li>
                            <li className='li-forgot-password' onClick={this.OnSignOut}>
                                <i className="fa fa-sign-out" aria-hidden="true"></i> Đăng xuất</li>
                        </ul>
                    </div> : null
                    }
                    
                </div>
            </div>
        )
    }
}

export default RightMenuHomePage;