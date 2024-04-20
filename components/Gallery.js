import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This line is new

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