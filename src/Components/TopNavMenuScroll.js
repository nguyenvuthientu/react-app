import React, {Component} from 'react';
import './../css/TopNavMenuScroll/TopNavMenuScroll.css';
import logo from '../images/Logo.png';

class TopNavMenuScroll extends Component{

    constructor(props){
        super(props);
        //this.ShowTopNaveMenuScroll = this.ShowTopNaveMenuScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
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
    }

    render(){

        return(
            <div className='top-nav-menu-scroll' id='top-nav-menu-scroll'>
                <img src={logo} className="logo"></img>
                <div className='menu'>
                    <a href=''>VỀ HANWHA LIFE</a>
                    <a href=''>CHỨC NĂNG</a>
                    <a href=''>LIÊN HỆ</a>
                </div>
            </div>
        )
    }
}

export default TopNavMenuScroll;