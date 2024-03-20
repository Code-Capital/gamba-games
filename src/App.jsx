import Header from "./component/Header.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/global.css'
import Footer from "./component/Footer.jsx";
import TabPagesLayout from "./layouts/TabPagesLayout.jsx";
import UserDetailsLayout from "./layouts/UserDetailsLayout.jsx";
import KingsRoad from "./component/KingsRoad.jsx";

function App() {
    return (
        <>
            <Header/>
            <TabPagesLayout/>
            <UserDetailsLayout/>
            <KingsRoad/>
            <Footer/>
        </>
    )
}

export default App
