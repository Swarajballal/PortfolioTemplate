import React, { useState } from 'react';
import Spinner from '../ui/Spinner';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../../App.css';

const Gallery: React.FC = () => {
  const [images, setImages] = useState([
    {
      original: './img/YT-photos-gallery-1.JPG',
      thumbnail: './img/YT-photos-gallery-1.JPG',
    },
    {
      original: './img/YT-photos-gallery-2.JPG',
      thumbnail: './img/YT-photos-gallery-2.JPG',
    },
    {
      original: './img/YT-photos-gallery-3.JPG',
      thumbnail: './img/YT-photos-gallery-3.JPG',
    },
    {
      original: './img/YT-photos-gallery-4.JPG',
      thumbnail: './img/YT-photos-gallery-4.JPG',
    },
    {
      original: './img/YT-photos-gallery-5.JPG',
      thumbnail: './img/YT-photos-gallery-5.JPG',
    },
    {
      original: './img/YT-photos-gallery-6.JPG',
      thumbnail: './img/YT-photos-gallery-6.JPG',
    },
  ]);

  const [clickCount, setClickCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadMoreImages = () => {
    setClickCount(clickCount + 1);
    setLoading(true);

    setTimeout(() => {
      const newImages = [
        {
          original: './img/YT-photos-gallery-1.JPG',
          thumbnail: './img/YT-photos-gallery-1.JPG',
        },
        {
          original: './img/YT-photos-gallery-2.JPG',
          thumbnail: './img/YT-photos-gallery-2.JPG',
        },
        {
          original: './img/YT-photos-gallery-3.JPG',
          thumbnail: './img/YT-photos-gallery-3.JPG',
        },
        {
          original: './img/YT-photos-gallery-4.JPG',
          thumbnail: './img/YT-photos-gallery-4.JPG',
        },
        {
          original: './img/YT-photos-gallery-5.JPG',
          thumbnail: './img/YT-photos-gallery-5.JPG',
        },
        {
          original: './img/YT-photos-gallery-6.JPG',
          thumbnail: './img/YT-photos-gallery-6.JPG',
        },
      ];
      setImages([...images, ...newImages]);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="w-full md:w-1/2 mx-auto mt-3 p-6 md:p-0">
        <ImageGallery items={images} lazyLoad />
      </div>
      {clickCount < 1 && (
        <div className="flex justify-center w-full mt-3">
          <div className="h-12 self-center w-fit rounded-full bg-gradient-to-r from-violet-900 to-blue-600 p-0.5">
            <button
              onClick={loadMoreImages}
              className="flex h-full w-full items-center justify-center bg-white rounded-full px-5 md:px-10 text-sm md:text-base font-sans font-semibold tracking-tight hover:cursor-pointer hover:bg-transparent hover:text-white"
            >
              {loading ? <Spinner /> : 'See More'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
