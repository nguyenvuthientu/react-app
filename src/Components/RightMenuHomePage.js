import React, {Component} from 'react';
import './../css/RightMenuHomePage/RightMenuHomePage.css';

class RightMenuHomePage extends Component{

    OpenLoginForm = () => {
        this.props.OpenLoginForm();
    }

    render(){
        return(
            <div className="right-menu-homepage">
                <div className="right-menu-item">
                    <i className="fa fa-phone fa-lg"></i> <a href='#'>1980-50-57-22</a>
                </div>
                <div className="right-menu-item" onClick={this.OpenLoginForm}>
                    <i className="fa fa-sign-in fa-lg"></i> <a href='#'>Đăng nhập</a>
                </div>
            </div>
        )
    }
}

export default RightMenuHomePage;