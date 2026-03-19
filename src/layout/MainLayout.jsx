import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="flex flex-row">
            {/* Sidebar */}
            <aside className="">Menu</aside>
            <div className="w-full z-0">
                {/* Navbar */}
                <header>Financheck</header>
                {/* Content */}
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
