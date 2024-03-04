import {useState } from "react";
// import { useCallback } from "react";
import NavbarItem from "./NavbarItem";
import React from "react";  
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState('HOME');
    const menuItems = ['HOME', 'NEWS&MEDIA', 'BLOGS', 'GALLERY', 'FOCUS AREAS', 'INITIATIVES', 'ASSEMBLY'];
    // const [showMobileMenu, setShowMobileMenu] = useState(false);  


    // const toggleMobileMenu = useCallback(() => {
    //     setShowMobileMenu((current) => !current);
    // }, [setShowMobileMenu]);


  return (
        <nav className="w-[90%] z-10 md:p-8 xl:mt-10 bg-white rounded-full shadow-[rgba(0,_0,_0,_0.4)_20px_20px_20px_10px] absolute mx-auto">
            <div className="flex flex-row items-center justify-center relative">
                <div className="flex-row gap-2 hidden lg:flex absolute">
                    {menuItems.map((item, index) => (
                        <React.Fragment key={item}>
                            <NavbarItem
                                label={item}
                                active={active == item}
                                to={item}
                                onClick={() => {
                                    setActive(item);
                                    switch(item) {
                                        case 'HOME':
                                            navigate('/');
                                            break;
                                        case 'NEWS&MEDIA':
                                            navigate('/');
                                            break;
                                        case 'BLOGS':
                                            break;
                                        case 'GALLERY':
                                            navigate('/gallery');
                                            break;  
                                        case 'FOCUS AREAS':
                                            navigate('/focus-area');
                                            break;
                                        case 'INITIATIVES':
                                            navigate('/initiative');
                                            break;
                                        case 'ASSEMBLY':
                                            break; 
                                        default:
                                            navigate('/');
                                            break;       
                                        }
                                    }}
                                />
                            {index === 3 && (
                                <img src="./img/header-logo.png" loading='lazy' className="w-32 h-32 cursor-pointer" alt="homepage_logo" onClick={(() => { navigate ('/')})} />
                            )}


                            {index === 6 && (
                                <img src="./img/live-btn.png" loading='lazy' className="w-16 h-6
                                self-center cursor-pointer" alt="homepage_logo" onClick={(() => { navigate ('/')})} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

        </nav>
  );
};

export default NavBar;