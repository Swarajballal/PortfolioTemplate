import React from 'react';

interface NavbarItemProps {
    label: string;
    active?: boolean;
    onClick: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active, onClick }) => {
    return (
        <div onClick={onClick} className={active ? 'cursor-default transition self-center font-mono font-extrabold px-6 md:text-base text-transparent bg-gradient-to-r from-violet-800 to-blue-800 ... bg-clip-text' : 'text-black hover:text-gray-500 cursor-pointer transition self-center font-mono font-extrabold px-6 md:text-base min-w-fit' }>
            {label}
        </div>
    )
}

export default NavbarItem;