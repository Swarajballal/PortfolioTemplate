import React, { useState, useEffect } from 'react';
import youthfocusareaimg from '../../../public/img/YT focus-section-youth.png'
import womenfocusareaimg from '../../../public/img/YT  focus-section-women.png'
import farmerfocusareaimg from '../../../public/img/YT  focus-section-farmers.png'
import educationfocusareaimg from '../../../public/img/YT focus-section-education.png'
import healthfocusareaimg from '../../../public/img/YT focus-section-Health.png'
import governmentfocusareaimg from '../../../public/img/YT focus-section-good-governance.png'
import economyfocusareaimg from '../../../public/img/YT focus-section-economy.png'
import waterfocusareaimg from '../../../public/img/YT  focus-section-water.png'

interface FocusAreaContentProps {
    label: string;
    active?: boolean;
    onClick: () => void;
}

const FocusAreaContent : React.FC<FocusAreaContentProps> = ({ label, active, onClick }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [preloadedImages, setPreloadedImages] = useState<{ [key: string]: string }>({});
    const [preloadedTexts, setPreloadedTexts] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const images : { [key: string]: string } = {
            'Youth': youthfocusareaimg,
            'Women': womenfocusareaimg,
            'Farmer': farmerfocusareaimg,
            'Education': educationfocusareaimg,
            'HealthCare': healthfocusareaimg,
            'Good Governance': governmentfocusareaimg,
            'Economy': economyfocusareaimg,
            'Water': waterfocusareaimg
        };

        const texts : { [key: string]: string } = {
            'Youth': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed lacus nulla.',

            'Women': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed lacus nulla.',

            'Farmer': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed lacus nulla.',

            'Education': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed lacus nulla.',

            'HealthCare': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed lacus nulla.',

            'Good Governance': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed lacus nulla.',

            'Economy': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed lacus nulla.',

            'Water': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed lacus nulla.',
        };

        Object.keys(images).forEach((key) => {
            const img = new Image();
            img.src = images[key];
        });

        setPreloadedImages(images);
        setPreloadedTexts(texts);
        setIsLoading(false);
    }, []);

    if (!active) {
        return null; 
    }

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <div style={{ border: '16px solid #f3f3f3', borderRadius: '50%', borderTop: '16px solid #3498db', width: '120px', height: '120px', animation: 'spin 2s linear infinite' }} />
            </div>
        );
    }
    
    const imgSrc = preloadedImages[label];
    const text = preloadedTexts[label];

    return (
        <>
        <div className="w-2/5]">
            <img src={imgSrc} className="w-full" alt="profile-header-image" />
        </div>

        <div className="flex flex-col w-3/5 items-start justify-center">
            <p className="text-start mt-6">
            {text}
            </p>

            <div className="h-10 mt-4 w-fit rounded-full bg-gradient-to-r from-violet-900 to-blue-600 p-0.5">
            <button 
                className="flex h-full w-full items-center justify-center bg-white rounded-full px-10 text-base font-mono font-black tracking-tight hover:cursor-pointer hover:bg-transparent hover:text-white"
                onClick={onClick}
            >
                READ MORE
            </button>
            </div>
        </div>
        </>
    );
};

export default FocusAreaContent;
