import React, {Component} from 'react';
import './../css/ScrollToTop/ScrollToTop.css';

class ScrollToTop extends Component{

    handleScrollToTop = () => {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }

    render(){
        return(
            <div className='scroll-to-top-hide' id='scroll-to-top'>
                <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
            </div>
        )
    }
}

export default ScrollToTop;