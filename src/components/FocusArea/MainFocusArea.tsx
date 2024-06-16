import React, { useState, useEffect } from 'react';
import Spinner from '../ui/Spinner';
import youthfocusareaimg from '../../../public/img/YT focus-section-youth.png';
import womenfocusareaimg from '../../../public/img/YT  focus-section-women.png';
import farmerfocusareaimg from '../../../public/img/YT  focus-section-farmers.png';
import educationfocusareaimg from '../../../public/img/YT focus-section-education.png';
import healthfocusareaimg from '../../../public/img/YT focus-section-Health.png';
import governmentfocusareaimg from '../../../public/img/YT focus-section-good-governance.png';
import economyfocusareaimg from '../../../public/img/YT focus-section-economy.png';
import waterfocusareaimg from '../../../public/img/YT  focus-section-water.png';
import { useNavigate } from "react-router-dom";

interface MainFocusAreaProps {
  label: string;
  showImage?: boolean;
}

const MainFocusArea: React.FC<MainFocusAreaProps> = ({ label, showImage = true }) => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const texts: { [key: string]: string } = {
      'Youth': 'Yashomati Thakur has been a staunch advocate for youth empowerment, recognizing the importance of nurturing the next generation of leaders.She has spearheaded various initiatives aimed at providing educational and employment opportunities for young people in her constituency....',
      'Women': `Yashomati Thakur’s tenure as the Minister for Women and Child Development and the Guardian Minister of Amravati district was marked by relentless efforts to improve the status of women. Policies were implemented focusing on women's safety, health, and economic independence. Numerous initiatives were launched to combat gender-based violence and provide support for women entrepreneurs....`,
      'Farmer': `Understanding the critical role of agriculture in Maharashtra's economy, Yashomati Thakur, as the Minister for Women and Child Development and the Guardian Minister of Amravati district, has consistently worked towards the betterment of farmers. She has advocated for fair pricing, improved irrigation facilities, and access to modern farming techniques....`,
      'Education': `Yashomati Thakur is committed to improving the education system, recognizing it as the foundation for a prosperous society. Support has been extended to initiatives that enhance educational infrastructure, provide scholarships, and ensure quality education for all children, especially in rural areas....`,
      'HealthCare': `In the healthcare sector, Yashomati Thakur’s priority has been to improve access to medical facilities and services, particularly for the underprivileged. She has been instrumental in setting up health camps, mobile clinics, and improving hospital infrastructure in her constituency....`,
      'Good Governance': `Yashomati Thakur's approach to governance is rooted in transparency, accountability, and public participation. Measures have been implemented to improve government services and ensure they are delivered efficiently and effectively. `,
      'Economy': `Economic development is a key focus area, with a belief in creating a balanced and sustainable economy. Policies that encourage industrial growth, investment in infrastructure, and job creation have been supported.... `,
      'Water': `Water conservation and management have been central to Yashomati Thakur’s environmental efforts. Projects to improve water supply, promote rainwater harvesting, and rejuvenate water bodies have been initiated....`
    };


    const images: { [key: string]: string } = {
      'Youth': youthfocusareaimg,
      'Women': womenfocusareaimg,
      'Farmer': farmerfocusareaimg,
      'Education': educationfocusareaimg,
      'HealthCare': healthfocusareaimg,
      'Good Governance': governmentfocusareaimg,
      'Economy': economyfocusareaimg,
      'Water': waterfocusareaimg
    };

    setLoading(true);
    setText(texts[label]);
    setImage(images[label]);
    setLoading(false);
  }, [label]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {showImage && (
        <div className=" w-full md:w-2/5">
          <img src={image} className="w-full" alt="focus-area" />
        </div>
      )}
      <div className='w-full md:w-3/5 flex flex-col items-center md:items-start gap-6 md:gap-10'>
        <p className="text-center md:text-start mt-6">{text}</p>
        {showImage && (
          <div className="h-12 w-fit rounded-full bg-gradient-to-r from-violet-900 to-blue-600 p-0.5">
            <button
              onClick={() => navigate('/focus-area')}
              className="flex h-full w-full items-center justify-center bg-white rounded-full px-5 md:px-10 text-base font-sans font-semibold tracking-tight hover:cursor-pointer hover:bg-transparent hover:text-white"
            >
              {'See More'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MainFocusArea;
