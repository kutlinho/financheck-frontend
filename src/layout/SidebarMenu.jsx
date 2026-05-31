import { useState } from "react";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function SidebarMenu() {
    const [collapsed, setCollapsed] = useState(false);

    const menuItems = [
        { label: "Genel Bakış", icon: "pi pi-home" },
        { label: "Görevler",    icon: "pi pi-star", badge: "5" },
        { label: "Kullanıcılar",icon: "pi pi-user" },
        { label: "Ürünler",    icon: "pi pi-box" },
        { label: "Ayarlar",    icon: "pi pi-cog" },
    ];

    return (
        <div className="flex h-screen [perspective:1000px] z-10">

            {/* Sidebar + Buton wrapper */}
            <div
                className={`relative flex-shrink-0 z-10 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] origin-left ${collapsed ? "w-14" : "w-60"}`}
                style={{
                    transform: collapsed
                        ? "translateZ(-40px) scale(0.97)"
                        : "translateZ(0px)",
                }}
            >
                {/* Sidebar */}
                <div className="w-full h-full border-r border-gray-200 overflow-hidden">

                    {/* Logo */}
                    <div className="flex items-center gap-2.5 px-3.5 py-4">
                        <i className="pi pi-th-large text-xl text-blue-700" />
                        {!collapsed && <span className="font-medium">Dashboard</span>}
                    </div>

                    {/* Menü öğeleri */}
                    {menuItems.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center gap-2.5 px-3.5 py-[15px] cursor-pointer whitespace-nowrap overflow-hidden rounded-lg transition-colors duration-150 hover:bg-blue-50 hover:text-blue-600"
                        >
                            <i className={`${item.icon} text-base`} style={{ minWidth: 20 }} />
                            {!collapsed && <span>{item.label}</span>}
                        </div>
                    ))}
                </div>

                {/* Toggle butonu */}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border border-gray-200 bg-white z-20 flex items-center justify-center cursor-pointer shadow-sm hover:bg-gray-50 transition-colors duration-150"
                >
                    <i className={`pi ${collapsed ? "pi-chevron-right" : "pi-chevron-left"} text-xs text-gray-500`} />
                </button>
            </div>
        </div>
    );
}