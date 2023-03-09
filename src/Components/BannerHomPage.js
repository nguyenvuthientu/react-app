import './../css/BannerHomePage/BannerHomePage.css';

import React, {Component} from 'react';

class BannerHomePage extends Component{
    render(){
        return(
            <div className="banner-homepage-area">
                {this.props.children}
            </div>
        )
    }
}

export default BannerHomePage;