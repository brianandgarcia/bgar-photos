import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This line is new
import Image from 'next/image';

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="gallery md:flex flex-wrap justify-between">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className='w-full md:w-1/2 mb-4'
            onClick={() => setSelectedImage(image)}
            unoptimized
            priority
          />
        ))}
      </div>

      {selectedImage && (
      <Lightbox
        mainSrc={selectedImage}
        onCloseRequest={() => setSelectedImage(null)}
      />
      )}
    </div>
  );
}