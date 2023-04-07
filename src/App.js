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
import MenuHomePageText from './Components/MenuHomePageText';
import Menu from './Components/Menu';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            isDisplayLoginForm : false,
            isLoggedIn : false,
            isGoToFunctionAfterLogin : false
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
            if(data.username === ''){
                let spanValidationInputUsername = document.getElementById('span-validation-input-username');
                spanValidationInputUsername.style.display = 'inline-block';
            }

            if(data.password === ''){
                let spanValidationInputPassword = document.getElementById('span-validation-input-password');
                spanValidationInputPassword.style.display = 'inline-block';
            }

            if(data.username !== '' && data.password !== ''){
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
                else{
                    let formLogin = document.querySelector('#form-login');
                    let textDanger = formLogin.querySelector('.row-text-danger');
                    textDanger.style.display = 'flex';
                    textDanger.style.alignItems = 'center';
                }
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

    OnHandleGoToFunction = () => {
        let loggedInCache = localStorage.getItem('isLoggedIn');
        if(loggedInCache === null){
            this.setState({
                isDisplayLoginForm: true
            });
        }
        else{
            this.setState({
                isGoToFunctionAfterLogin : true
            });
            window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
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
                    <BannerHomePage IsGoToFunctionAfterLogin={this.state.isGoToFunctionAfterLogin}>
                        <MenuHomePage>
                            <RightMenuHomePage 
                                OpenLoginForm={this.OpenLoginForm} 
                                OnSignOut={this.OnSignOut}
                                />
                        </MenuHomePage>
                        <MenuHomePageText OnHandleGoToFunction={this.OnHandleGoToFunction}></MenuHomePageText>                   
                        <MenuHomePageMobile>
                            <RightMenuHomePageMobile />
                        </MenuHomePageMobile>
                        <TopNavMenuScroll OnHandleGoToFunction={this.OnHandleGoToFunction} />
                        <MainNavMobile 
                            OpenLoginForm={this.OpenLoginForm}
                            OnSignOut={this.OnSignOut}                       
                        />
                        <WelcomeText IsGoToFunctionAfterLogin={this.state.isGoToFunctionAfterLogin} />
                    </BannerHomePage>
                    <Menu IsGoToFunctionAfterLogin={this.state.isGoToFunctionAfterLogin} />
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
