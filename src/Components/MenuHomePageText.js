import React, {Component} from 'react';
import '../css/MenuHomePageText/MenuHomePageText.css';

class MenuHomePageText extends Component{

    OnHandleGoToFunction = () => {
        this.props.OnHandleGoToFunction();
    }

    render(){
        return(
            <div className='menu-homepage-text'>
                <span>VỀ BOSCHARETE</span>
                <span onClick={this.OnHandleGoToFunction}>CHỨC NĂNG</span>
                <span>LIÊN HỆ</span>
            </div>
        )
    }
}

export default MenuHomePageText;