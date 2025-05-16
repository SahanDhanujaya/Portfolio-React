import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar.tsx";
import {Footer} from "../components/Footer.tsx";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout;