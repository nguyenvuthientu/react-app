import React, {Component} from 'react';
import './css/App/App.css';
import BannerHomePage from "./Components/BannerHomPage";
import MenuHomePage from "./Components/MenuHomPage";
import RightMenuHomePage from "./Components/RightMenuHomePage";
import RightMenuHomePageMobile from "./Components/RightMenuHomePageMobile";
import MainNavMobile from './Components/MainNavMobile';
import WelcomeText from './Components/WelcomeText';
import MyService from './Components/MyServices';
import TopNavMenuScroll from './Components/TopNavMenuScroll';
import ScrollToTop from './Components/ScrollToTop';
import MenuHomePageMobile from './Components/MenuHomePageMobile';
import Footer from './Components/Footer';
import FooterMobile from './Components/FooterMobile';
import Login from './Components/Login';
import LoginForm from './Components/LoginForm';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            isDisplayLoginForm : false
        };
    }

    OpenLoginForm = () => {
        this.setState({
            isDisplayLoginForm: true
        });
    }

    render(){
        if(!this.state.isDisplayLoginForm){
            return (
                <div>
                    <BannerHomePage>
                        <MenuHomePage>
                            <RightMenuHomePage OpenLoginForm={this.OpenLoginForm} />
                        </MenuHomePage>
                        <MenuHomePageMobile>
                            <RightMenuHomePageMobile />
                        </MenuHomePageMobile>
                        <TopNavMenuScroll />
                        <MainNavMobile OpenLoginForm={this.OpenLoginForm} />
                        <WelcomeText />
                    </BannerHomePage>
                    <MyService />
                    <Footer />
                    <FooterMobile />
                    <ScrollToTop />
                </div>
            );
        }
        
        return <Login>
                    <LoginForm/>
               </Login>
    } 
}

export default App;
