import { useCallback, useState } from "react";
import Container from "../ui/container";
import NavbarItem from "./NavbarItem";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState('HOME');
    const menuItems = ['HOME', 'NEWS&MEDIA', 'BLOGS', 'GALLERY', 'FOCUS AREAS', 'INITIATIVES', 'ASSEMBLY'];
    const [showMobileMenu, setShowMobileMenu] = useState(false);  


    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, [setShowMobileMenu]);


  return (
    <Container>
        <nav className="w-4/5 mx-auto z-10 md:p-7 xl:mt-10 bg-white rounded-full shadow-[rgba(0,_0,_0,_0.4)_20px_20px_20px_10px] 
     relative">
            <div className="flex flex-row items-center justify-center relative">
                <div className="flex-row gap-2 hidden lg:flex absolute">
                    {menuItems.map((item, index) => (
                        <React.Fragment key={item}>
                            <NavbarItem
                                label={item}
                                active={active == item}
                                onClick={() => {
                                    setActive(item);
                                    switch(item) {
                                        case 'HOME':
                                            break;
                                        case 'NEWS&MEDIA':
                                            break;
                                        case 'BLOGS':
                                            break;
                                        case 'GALLERY':
                                            break;  
                                        case 'FOCUS AREAS':
                                            break;
                                        case 'INITIATIVES':
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
                                <img src="./img/header-logo.png" loading='lazy' className="w-28 h-28 cursor-pointer" alt="homepage_logo" onClick={(() => { navigate ('/')})} />
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
    </Container>
  );
};

export default NavBar;