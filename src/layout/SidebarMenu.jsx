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
        <div style={{ display: "flex", perspective: "1000px",height: "100vh" }}>

            {/* Sidebar */}
            <div
                style={{
                    width: collapsed ? 56 : 240,
                    minWidth: collapsed ? 56 : 240,
                    borderRight: "1px solid #e5e7eb",
                    transition: "width 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s",
                    transform: collapsed
                        ? "translateZ(-40px) scale(0.97)"
                        : "translateZ(0px)",
                    transformOrigin: "left center",
                    overflow: "hidden",
                    zIndex: 10,
                    position: "relative",
                }}
            >
                {/* Logo */}
                <div style={{ padding: "16px 14px", display: "flex", gap: 10 }}>
                    <i className="pi pi-th-large" style={{ fontSize: 20, color: "#185FA5" }} />
                    {!collapsed && <span style={{ fontWeight: 500 }}>Dashboard</span>}
                </div>

                {/* Menü öğeleri */}
                {menuItems.map((item) => (
                    <div
                        key={item.label}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "15px 14px",
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                        }}
                    >
                        <i className={item.icon} style={{ fontSize: 16, minWidth: 20 }} />
                        {!collapsed && <span>{item.label}</span>}
                    </div>
                ))}

                {/* Toggle butonu */}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        position: "absolute",
                        right: -14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "1px solid #e5e7eb",
                        cursor: "pointer",
                        zIndex: 20,
                    }}
                >
                    <i className={`pi ${collapsed ? "pi-chevron-right" : "pi-chevron-left"}`} />
                </button>
            </div>
        </div>
    );
}