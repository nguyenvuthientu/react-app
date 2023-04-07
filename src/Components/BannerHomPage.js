import './../css/BannerHomePage/BannerHomePage.css';

import React, {Component} from 'react';

class BannerHomePage extends Component{

    render(){
        if(this.props.IsGoToFunctionAfterLogin){
            return <div className="banner-homepage-area-function" id='banner-homepage-area'>
                        {this.props.children}
                </div>
        }

        return(
            <div className="banner-homepage-area" id='banner-homepage-area'>
                {this.props.children}
            </div>
        )
    }
}

export default BannerHomePage;