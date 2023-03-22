import React, {Component} from 'react';
import './../css/ScrollToTop/ScrollToTop.css';

class ScrollToTop extends Component{

    handleScrollToTop = () => {
        let classList = document.getElementById('scroll-to-top').classList;
        if (!classList.contains('scroll-to-top-hide')){
            window.scrollTo({ left: 0, top: 0, behavior: "smooth" }); 
        }
    }

    render(){
        return(
            <div 
                className='scroll-to-top scroll-to-top-hide' 
                id='scroll-to-top' 
                onClick={this.handleScrollToTop}>
                <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
            </div>
        )
    }
}

export default ScrollToTop;