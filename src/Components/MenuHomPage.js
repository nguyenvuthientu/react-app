import React, { Component } from 'react';
import './../css/MenuHomePage/MenuHomePage.css';
import logo from '../images/LogoHanwhaLifeWhite.png';

class MenuHomePage extends Component {
    render() {
        return (
            <div className='menu-homepage'>
                {/* <img src={logo} className="logo"></img> */}
                <div>ABC</div>
                {this.props.children}
            </div>
        )
    }
}

export default MenuHomePage;