import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="financheck-layout">
            {/* Navbar */}
            <header>Financheck</header>

            {/* Sidebar */}
            <aside>Menu</aside>

            {/* Content */}
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
