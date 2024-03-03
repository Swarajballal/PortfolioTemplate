import React, { useState, useEffect } from 'react';


interface MainFocusAreaContentProps {
    label: string;
    active?: boolean;
    onClick: () => void;
}

const MainFocusArea : React.FC<MainFocusAreaContentProps> = ({ label, active}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [preloadedTexts, setPreloadedTexts] = useState<{ [key: string]: string }>({});

    useEffect(() => {
    
        const texts : { [key: string]: string } = {
            'Youth': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed lacus nulla.',

            'Women': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed lacus ',

            'Farmer': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed',

            'Education': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed',

            'HealthCare': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed lacus nulla.',

            'Good Governance': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed lacus nulla.',

            'Economy': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed lacus nulla.',

            'Water': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna ac neque pharetra, in finibus mi lacinia. Proin non lorem at dui sagittis aliquam. Quisque id turpis felis. Donec id quam vitae lorem faucibus cursus at ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat nisl, a dignissim diam. Mauris aliquet, sem vitae aliquam tincidunt, ipsum justo accumsan lacus, sit amet dapibus dolor diam sed justo. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed lacus nulla.',
        };

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
    
    const text = preloadedTexts[label];

    return (
        <>

        <div className="w-[90%] items-start mx-auto">
            <p className="text-start mt-6">
            {text}
            </p>
        </div>
        </>
    );
};

export default MainFocusArea;