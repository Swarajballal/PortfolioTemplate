import React, { useState, useEffect } from 'react';
import Spinner from '../ui/Spinner';
import youthfocusareaimg from '../../../public/img/YT focus-section-youth.png';
import womenfocusareaimg from '../../../public/img/YT focus-section-women.png';
import farmerfocusareaimg from '../../../public/img/YT focus-section-farmers.png';
import educationfocusareaimg from '../../../public/img/YT focus-section-education.png';
import healthfocusareaimg from '../../../public/img/YT focus-section-Health.png';
import governmentfocusareaimg from '../../../public/img/YT focus-section-good-governance.png';
import economyfocusareaimg from '../../../public/img/YT focus-section-economy.png';
import waterfocusareaimg from '../../../public/img/YT focus-section-water.png';

interface FocusAreaContentProps {
  label: string;
}

const FocusAreaContent: React.FC<FocusAreaContentProps> = ({ label }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const texts: { [key: string]: string } = {
      'Youth': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      'Women': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      'Farmer': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      'Education': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      'HealthCare': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      'Good Governance': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      'Economy': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      'Water': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
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
      <div className="w-2/5">
        <img src={image} className="w-full" alt="focus-area" />
      </div>
      <div className="flex flex-col w-3/5 items-start justify-center">
        <p className="text-start mt-6">{text}</p>
      </div>
    </>
  );
};

export default FocusAreaContent;
