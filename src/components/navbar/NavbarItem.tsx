import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface NavbarItemProps {
    label: string;
    active?: boolean;
    to: string;
    onClick: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active, to, onClick }) => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo === to) {
            setTimeout(() => {
                document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }, [location, to]);

    return (
        <>
            {to && to.startsWith('/') ? (
                <RouterLink
                    to={to}
                    className={active ? 'cursor-default transition self-center font-mono font-extrabold md:text-base text-transparent bg-gradient-to-r from-violet-800 to-blue-800 ... bg-clip-text' : 'text-black hover:text-gray-500 cursor-pointer transition self-center font-mono font-extrabold md:text-base min-w-fit'}
                    onClick={onClick}
                >
                    {label}
                </RouterLink>
            ) : (
                <ScrollLink
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={active ? 'cursor-default transition self-center font-mono font-extrabold md:text-base text-transparent bg-gradient-to-r from-violet-800 to-blue-800 ... bg-clip-text' : 'text-black hover:text-gray-500 cursor-pointer transition self-center font-mono font-extrabold md:text-base min-w-fit'}
                    onClick={onClick}
                >
                    {label}
                </ScrollLink>
            )}
        </>
    );
};

export default NavbarItem;
