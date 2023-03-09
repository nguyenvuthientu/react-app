import React, { Component } from 'react';
import './../css/MenuHomePage/MenuHomePage.css';

class MenuHomePage extends Component {
    render() {
        return (
            <div className='menu-homepage'>
                <img src="/images/LogoHanwhaLifeWhite.png" className="logo"></img>
                {this.props.children}
            </div>
        )
    }
}

export default MenuHomePage;