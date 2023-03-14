import React, {Component} from 'react';
import './../css/RightMenuHomePageMobile/RightMenuHomePageMobile.css';

class RightMenuHomePageMobile extends Component{

    ToggleMenuBar(){
        let classListMenuBar = document.getElementById('icon-menu-bar-mobile').classList;
        if (classListMenuBar.contains('fa-bars')){
            classListMenuBar.remove('fa-bars');
            classListMenuBar.add('fa-times');

            let classListMainNavMobile = document.getElementById('main-nav-mobile').classList;
            if(!classListMainNavMobile.contains('main-nav-mobile-show')){
                classListMainNavMobile.add('main-nav-mobile-show');
            }
        }
        else if(classListMenuBar.contains('fa-times')){
            classListMenuBar.remove('fa-times');
            classListMenuBar.add('fa-bars');

            let classListMainNavMobile = document.getElementById('main-nav-mobile').classList;
            if(classListMainNavMobile.contains('main-nav-mobile-show')){
                classListMainNavMobile.remove('main-nav-mobile-show');
            }
        }
    }

    render(){
        return(
            <div className='right-menu-home-page-mobile'>
                <div className="phone-contact">
                    <div className='icon'>
                        <i className="fa fa-phone fa-lg"></i>
                    </div>
                     <a href='#'>1980-50-57-22</a>
                </div>
                <div className='menu-bar-mobile' onClick={this.ToggleMenuBar}>
                    <i className='fa fa-bars fa-lg' id='icon-menu-bar-mobile'></i>
                </div>
            </div>
        )
    }
}

export default RightMenuHomePageMobile;