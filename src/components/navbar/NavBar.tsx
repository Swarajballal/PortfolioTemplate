import { useState } from "react";
import React from "react";
import NavbarItem from "./NavbarItem";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState('HOME');
    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = [
        { label: 'HOME', path: '/' },
        { label: 'NEWS & MEDIA', path: 'NEWSMEDIA' },
        { label: 'BLOGS', path: null },
        { label: 'GALLERY', path: 'GALLERY' },
        { label: 'FOCUS AREAS', path: 'FOCUSAREAS' },
        { label: 'INITIATIVES', path: '/initiative' },
        { label: 'ASSEMBLY', path: null }
    ];

    const handleNavigation = (item) => {
        setActive(item.label);
        if (item.path && item.path.startsWith('/')) {
            navigate(item.path);
        } else {
            if (location.pathname !== '/') {
                navigate('/', { state: { scrollTo: item.path } });
            }
        }
    };

    return (
        <nav className="w-[90%] z-50 md:p-6 mt-2 xl:mt-10 bg-white rounded-full shadow-[rgba(0,_0,_0,_0.4)_20px_20px_20px_10px] mx-auto">
            <div className="flex flex-row items-center justify-between relative p-4 md:p-0">
                <div className="hidden lg:flex justify-evenly w-full">
                    {menuItems.map((item, index) => (
                        <React.Fragment key={item.label}>
                            {index === 3 && (
                                <img
                                    src="./img/header-logo.png"
                                    loading='lazy'
                                    className="w-32 h-32 cursor-pointer absolute transform -translate-y-1/2"
                                    alt="homepage_logo"
                                    onClick={() => navigate('/')}
                                    style={{ top: '50%' }}
                                />
                            )}
                            <NavbarItem
                                label={item.label}
                                active={active === item.label}
                                to={item.path || ''}
                                onClick={() => handleNavigation(item)}
                            />
                            {index === 6 && (
                                <img
                                    src="./img/live-btn.png"
                                    loading='lazy'
                                    className="w-16 h-6 self-center cursor-pointer"
                                    alt="live_button"
                                    onClick={() => navigate('/')}z
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="lg:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                {menuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white lg:hidden flex flex-col items-center">
                        {menuItems.map((item) => (
                            <NavbarItem
                                key={item.label}
                                label={item.label}
                                active={active === item.label}
                                to={item.path || ''}
                                onClick={() => {
                                    handleNavigation(item);
                                    setMenuOpen(false);
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
