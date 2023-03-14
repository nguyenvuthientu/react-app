import './css/App/App.css';
import BannerHomePage from "./Components/BannerHomPage";
import MenuHomePage from "./Components/MenuHomPage";
import RightMenuHomePage from "./Components/RightMenuHomePage";
import RightMenuHomePageMobile from "./Components/RightMenuHomePageMobile";
import MainNavMobile from './Components/MainNavMobile';
import Hr from './Components/Hr';
import WelcomeText from './Components/WelcomeText';
import MyService from './Components/MyServices';
import TopNavMenuScroll from './Components/TopNavMenuScroll';

function App() {
    return (
        <div>
            <BannerHomePage>
                <MenuHomePage>
                    <RightMenuHomePage/>
                    <RightMenuHomePageMobile/>
                </MenuHomePage>
                <TopNavMenuScroll />
                <MainNavMobile/>
                <Hr/>
                <WelcomeText />
            </BannerHomePage>
            <MyService />
        </div>
    );
}

export default App;
