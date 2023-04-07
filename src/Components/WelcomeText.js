import React, {Component} from 'react';
import './../css/WelcomeText/WelcomeText.css';

class WelcomeText extends Component{

    render(){
        if(this.props.IsGoToFunctionAfterLogin){
            return null;
        }
        
        return(
            <div className='WelcomeText' id='WelcomeText'>
                <h2>Chào Mừng Quý Khách <br/>
                    đến với <span style={{color: "#ff671f"}}>Cổng Thông Tin Khách Hàng <br />
                    Boscharete Việt Nam</span>        
                </h2> 
            </div>
             
        )
    }
}

export default WelcomeText;