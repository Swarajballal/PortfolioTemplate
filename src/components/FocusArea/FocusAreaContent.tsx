import React, { useState, useEffect } from 'react';
import Spinner from '../ui/Spinner';

interface FocusAreaContentProps {
  label: string;
}

const FocusAreaContent: React.FC<FocusAreaContentProps> = ({ label }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const texts: { [key: string]: string } = {
      'Youth': `Yashomati Thakur has been a staunch advocate for youth empowerment, recognizing the importance of nurturing the next generation of leaders.
      has spearheaded various initiatives aimed at providing educational and employment opportunities for young people in her constituency. Her programs focus on skill development, entrepreneurship, and sports, ensuring that the youth have the tools and platforms to excel. Her aim is to create an environment where young individuals can thrive, innovate, and contribute positively to society, driving progress and innovation in Maharashtra.`,
      'Women': `Yashomati Thakur’s tenure as the Minister for Women and Child Development and the Guardian Minister of Amravati district was marked by relentless efforts to improve the status of women. Policies were implemented focusing on women's safety, health, and economic independence. Numerous initiatives were launched to combat gender-based violence and provide support for women entrepreneurs. Her aim is to continue advocating for gender equality, ensuring that women have equal access to opportunities and resources, fostering an inclusive society where women can achieve their full potential.`,
      'Farmer': `Understanding the critical role of agriculture in Maharashtra's economy, Yashomati Thakur, as the Minister for Women and Child Development and the Guardian Minister of Amravati district, has consistently worked towards the betterment of farmers. She has advocated for fair pricing, improved irrigation facilities, and access to modern farming techniques. These efforts aim to enhance the livelihood of farmers, reduce their financial burdens, and increase agricultural productivity. Her vision includes creating sustainable agricultural practices that ensure food security and economic stability for farming communities.`,
      'Education': `Yashomati Thakur is committed to improving the education system, recognizing it as the foundation for a prosperous society. Support has been extended to initiatives that enhance educational infrastructure, provide scholarships, and ensure quality education for all children, especially in rural areas. The focus is on bridging the gap between urban and rural education standards. Her aim is to create a more equitable education system that equips students with the knowledge and skills needed to succeed in a competitive world.`,
      'HealthCare': `In the healthcare sector, Yashomati Thakur’s priority has been to improve access to medical facilities and services, particularly for the underprivileged. She has been instrumental in setting up health camps, mobile clinics, and improving hospital infrastructure in her constituency. The goal is to ensure that every individual has access to quality healthcare services, reducing mortality rates and promoting overall well-being. The vision includes a robust healthcare system that is accessible, affordable, and efficient.`,
      'Good Governance': `Yashomati Thakur's approach to governance is rooted in transparency, accountability, and public participation. Measures have been implemented to improve government services and ensure they are delivered efficiently and effectively. The aim is to foster a culture of good governance where the government is responsive to the needs of its citizens, corruption is minimized, and public resources are utilized judiciously. The vision is to build a trust-based relationship between the government and the people.`,
      'Economy': `Economic development is a key focus area, with a belief in creating a balanced and sustainable economy. Policies that encourage industrial growth, investment in infrastructure, and job creation have been supported. The aim is to diversify the economy, reduce unemployment, and ensure that economic growth benefits all sections of society. The strategy includes promoting small and medium enterprises, encouraging innovation, and ensuring economic opportunities are accessible to everyone.`,
      'Water': `Water conservation and management have been central to Yashomati Thakur’s environmental efforts. Projects to improve water supply, promote rainwater harvesting, and rejuvenate water bodies have been initiated. The initiatives aim to ensure a sustainable water supply for agricultural, industrial, and domestic use. The goal is to address the challenges of water scarcity, improve water quality, and promote the efficient use of water resources, ensuring long-term environmental sustainability and resilience against climate change.`
    };

    setLoading(true);
    setText(texts[label]);
    setLoading(false);
  }, [label]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="flex flex-col w-full items-start justify-center text-sm md:text-base">
        <p className="text-justify md:text-start mt-6">{text}</p>
      </div>
    </>
  );
};

export default FocusAreaContent;
