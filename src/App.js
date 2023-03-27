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

function App() {
    return (
        <div>
            <BannerHomePage>
                <MenuHomePage>
                    <RightMenuHomePage />
                </MenuHomePage>
                <MenuHomePageMobile>
                    <RightMenuHomePageMobile />
                </MenuHomePageMobile>
                <TopNavMenuScroll />
                <MainNavMobile />
                <WelcomeText />
            </BannerHomePage>
            <MyService />
            <Footer />
            <FooterMobile />
            <ScrollToTop />
        </div>
    );
}

export default App;
