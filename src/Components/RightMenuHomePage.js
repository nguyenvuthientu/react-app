import React, {Component} from 'react';
import './../css/RightMenuHomePage/RightMenuHomePage.css';

class RightMenuHomePage extends Component{
    render(){
        return(
            <div className="right-menu-homepage">
                <div className="right-menu-item">
                    <i className="fa fa-phone fa-lg"></i> <a href='#'>1900-55-55-22</a>
                </div>
                <div className="right-menu-item">
                    <i className="fa fa-sign-in fa-lg"></i> <a href='#'>Đăng nhập</a>
                </div>
            </div>
        )
    }
}

export default RightMenuHomePage;