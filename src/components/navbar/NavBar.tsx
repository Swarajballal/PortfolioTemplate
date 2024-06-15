import { useState } from "react";
import React from "react";
import NavbarItem from "./NavbarItem";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState('HOME');
    const menuItems = [
        { label: 'HOME', path: '/' },
        { label: 'NEWS & MEDIA', path: 'NEWSMEDIA' },
        { label: 'BLOGS', path: null },
        { label: 'GALLERY', path: 'GALLERY' },
        { label: 'FOCUS AREAS', path: 'FOCUSAREAS' },
        { label: 'INITIATIVES', path: '/initiative' },
        { label: 'ASSEMBLY', path: null }
    ];

    const handleNavigation = (item: any) => {
        setActive(item.label);
        if (item.path && item.path.startsWith('/')) {
            navigate(item.path);
        }
    };

    return (
        <nav className="w-[90%] z-10 md:p-8 xl:mt-10 bg-white rounded-full shadow-[rgba(0,_0,_0,_0.4)_20px_20px_20px_10px] absolute mx-auto">
            <div className="flex flex-row items-center justify-center relative">
                <div className="flex-row gap-2 hidden lg:flex absolute">
                    {menuItems.map((item, index) => (
                        <React.Fragment key={item.label}>
                            <NavbarItem
                                label={item.label}
                                active={active === item.label}
                                to={item.path || ''}
                                onClick={() => handleNavigation(item)}
                            />
                            {index === 3 && (
                                <img
                                    src="./img/header-logo.png"
                                    loading='lazy'
                                    className="w-32 h-32 cursor-pointer"
                                    alt="homepage_logo"
                                    onClick={() => navigate('/')}
                                />
                            )}
                            {index === 6 && (
                                <img
                                    src="./img/live-btn.png"
                                    loading='lazy'
                                    className="w-16 h-6 self-center cursor-pointer"
                                    alt="live_button"
                                    onClick={() => navigate('/')}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
