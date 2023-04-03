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
            isDisplayLoginForm : false,
            isLoggedIn : false
        };
    }

    OpenLoginForm = () => {
        if(!this.state.isLoggedIn){
            this.setState({
                isDisplayLoginForm: true
            });
        } 
    }

    OnSubmitFormLogin = (data) => {
        if(data){
            if(data.username === 'tunvt' && data.password === '12345'){
                this.setState({
                    isLoggedIn : true,
                    isDisplayLoginForm: false
                });

                localStorage.setItem('isLoggedIn',JSON.stringify({
                    username: 'tunvt',
                    isLoggedIn: true
                }));
            }
        }
    }

    OnSignOut = () => {
        let loggedInCache = localStorage.getItem('isLoggedIn');
        if(loggedInCache){
            localStorage.removeItem('isLoggedIn');
            this.setState({
                isLoggedIn: false
            });
        }
    }

    render(){
        let loggedInObj = null;
        let loggedIn = false;
        let loggedInCache = localStorage.getItem('isLoggedIn');

        if(loggedInCache){
            
            loggedInObj = JSON.parse(loggedInCache);
            loggedIn = loggedInObj.isLoggedIn;
        }

        if(!this.state.isDisplayLoginForm || loggedIn){
            
            return (
                <div>
                    <BannerHomePage>
                        <MenuHomePage>
                            <RightMenuHomePage 
                                OpenLoginForm={this.OpenLoginForm} 
                                OnSignOut={this.OnSignOut}
                                />
                        </MenuHomePage>
                        <MenuHomePageMobile>
                            <RightMenuHomePageMobile />
                        </MenuHomePageMobile>
                        <TopNavMenuScroll />
                        <MainNavMobile 
                            OpenLoginForm={this.OpenLoginForm}
                            OnSignOut={this.OnSignOut}                       
                        />
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
                    <LoginForm OnSubmitFormLogin={this.OnSubmitFormLogin}/>
               </Login>
    } 
}

export default App;
