import React, { useState } from 'react';
import Spinner from '../ui/Spinner';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../../App.css';

const Gallery: React.FC = () => {
  const [images, setImages] = useState([
    {
      original: './img/1.webp',
      thumbnail: './img/1.webp',
    },
    {
      original: './img/2.webp',
      thumbnail: './img/2.webp',
    },
    {
      original: './img/3.webp',
      thumbnail: './img/3.webp',
    },
    {
      original: './img/4.webp',
      thumbnail: './img/4.webp',
    },
    {
      original: './img/5.webp',
      thumbnail: './img/5.webp',
    },
    {
      original: './img/6.webp',
      thumbnail: './img/6.webp',
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
          original: './img/7.webp',
          thumbnail: './img/7.webp',
        },
        {
          original: './img/8.webp',
          thumbnail: './img/8.webp',
        },
        {
          original: './img/9.webp',
          thumbnail: './img/9.webp',
        },
        {
          original: './img/10.webp',
          thumbnail: './img/10.webp',
        },
        {
          original: './img/11.webp',
          thumbnail: './img/11.webp',
        },
        {
          original: './img/12.webp',
          thumbnail: './img/12.webp',
        },
        {
          original: './img/13.webp',
          thumbnail: './img/13.webp',
        },
        {
          original: './img/14.webp',
          thumbnail: './img/14.webp',
        },
        {
          original: './img/15.webp',
          thumbnail: './img/15.webp',
        },
        {
          original: './img/16.webp',
          thumbnail: './img/16.webp',
        },
        {
          original: './img/17.webp',
          thumbnail: './img/17.webp',
        },
        {
          original: './img/18.webp',
          thumbnail: './img/18.webp',
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
