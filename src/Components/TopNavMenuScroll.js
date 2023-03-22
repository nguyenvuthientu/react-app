import React, {Component} from 'react';
import './../css/TopNavMenuScroll/TopNavMenuScroll.css';
import logo from '../images/Logo.png';

class TopNavMenuScroll extends Component{

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll, false);
    }

    handleScroll = (event) => {
        let scrollTop = window.pageYOffset;

        if(scrollTop > 0){
            let classList = document.getElementById('top-nav-menu-scroll').classList;
            if (!classList.contains('show')){
                classList.add('show'); 
            }
        }
        else{
            let classList = document.getElementById('top-nav-menu-scroll').classList;
            if (classList.contains('show')){
                classList.remove('show');
            }
        }

        const scrollToTop = document.getElementById('scroll-to-top');
        let classList = scrollToTop.classList;
        if(scrollTop > 300){
            if (!classList.contains('scroll-to-top-show')){
                classList.add('scroll-to-top-show'); 
            }

            if(classList.contains('scroll-to-top-hide')){
                classList.remove('scroll-to-top-hide');
            }
        }
        else{
            if (!classList.contains('scroll-to-top-hide')){
                classList.add('scroll-to-top-hide'); 
            }

            if(classList.contains('scroll-to-top-show')){
                classList.remove('scroll-to-top-show');
            }
        }
    }

    render(){

        return(
            <div className='top-nav-menu-scroll' id='top-nav-menu-scroll'>
                <img src={logo} className="logo"></img>
                <div className='menu'>
                    <a href=''>VỀ BOSCHARETE</a>
                    <a href=''>CHỨC NĂNG</a>
                    <a href=''>LIÊN HỆ</a>
                </div>
            </div>
        )
    }
}

export default TopNavMenuScroll;