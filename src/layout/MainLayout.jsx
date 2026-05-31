import {Outlet} from "react-router-dom";
import SidebarMenu from "./SidebarMenu.jsx";

const MainLayout = () => {
    return (
        <div className="flex flex-row">
            {/* Sidebar */}
            <SidebarMenu/>
            {/*<aside className="">Menu</aside>*/}
            <div className="w-full z-0">
                {/* Navbar */}
                <header>Financheck</header>
                {/* Content */}
                <main className="px-5 py-5">
                    <Outlet/>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
