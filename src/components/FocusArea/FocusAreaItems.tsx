import React from 'react';
import youthimg from '../../../public/icons/youth.svg'
import womenimg from '../../../public/icons/women.svg'
import farmerimg from '../../../public/icons/farmers.svg'
import educationimg from '../../../public/icons/education.svg'
import healthimg from '../../../public/icons/health.svg'
import governmentimg from '../../../public/icons/government.svg'
import economyimg from '../../../public/icons/economy.svg'
import waterimg from '../../../public/icons/water.svg'

interface FocusAreaItemProps {
    label: string;
    active?: boolean;
    onClick: () => void;
}

const FocusAreaItem : React.FC<FocusAreaItemProps> = ({ label, active, onClick }) => {
    
    const images : { [key: string]: string } = {
        'Youth': youthimg,
        'Women': womenimg,
        'Farmer': farmerimg,
        'Education': educationimg,
        'HealthCare': healthimg,
        'Good Governance': governmentimg,
        'Economy': economyimg,
        'Water': waterimg
    };
    
    const imgSrc = images[label];
  return (
    <div onClick={onClick} className = {active ? 'bg-gradient-to-r from-violet-900 via-white to-blue-600 border-2 border-white rounded-3xl flex flex-col justify-center items-center hover:cursor-pointer' : 'bg-white border-2 border-gray-500 rounded-3xl flex flex-col justify-center items-center hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] hover:cursor-pointer tracking-tighter py-4'}>
    <img src={imgSrc} alt={`${label}-icon`} className="w-12 h-12"/>
    <h4 className="text-base font-bold font-sans">{label}</h4>
  </div>
  );
};

export default FocusAreaItem;