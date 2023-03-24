import React, {Component} from 'react';
import '../css/MenuHomePageMobile/MenuHomePageMobile.css';
import logo from '../images/Logo.png';

class MenuHomePage extends Component{
    render(){
        return(
            <div className='menu-homepage-mobile'>
                <img src={logo} className="logo"></img>
                {this.props.children}
            </div>
        )
    }
}

export default MenuHomePage;