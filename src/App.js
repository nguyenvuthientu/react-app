import './css/App/App.css';
import BannerHomePage from "./Components/BannerHomPage";
import MenuHomePage from "./Components/MenuHomPage";
import RightMenuHomePage from "./Components/RightMenuHomePage";
import RightMenuHomePageMobile from "./Components/RightMenuHomePageMobile";
import MainNavMobile from './Components/MainNavMobile';

function App() {
    return (
        <div>
            <BannerHomePage>
                <MenuHomePage>
                    <RightMenuHomePage/>
                    <RightMenuHomePageMobile/>
                </MenuHomePage>
                <MainNavMobile/>
            </BannerHomePage>
        </div>
    );
}

export default App;
