import { Link as ScrollLink } from "react-scroll";
interface NavbarItemProps {
    label: string;
    active?: boolean;
    to: string; 
    onClick: () => void; 
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active, to, onClick }) => {
    return (
            <ScrollLink 
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={active ? 'cursor-default transition self-center font-mono font-extrabold px-6 md:text-base text-transparent bg-gradient-to-r from-violet-800 to-blue-800 ... bg-clip-text' : 'text-black hover:text-gray-500 cursor-pointer transition self-center font-mono font-extrabold px-6 md:text-base min-w-fit' }
                onClick={onClick} 
            >
                {label}
            </ScrollLink>
    )
}


export default NavbarItem;