// components/LightboxImage.js

import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { CldImage } from 'next-cloudinary';

const LightboxImage = ({ src, alt, width, height, srcThumb }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div onClick={() => setIsOpen(true)} className='cursor-pointer my-5'>
                <CldImage 
                src={src} 
                srcThumb={srcThumb}
                alt={alt} 
                width={width}
                height={height}
                className='w-full'
                />
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={src}
                    mainSrcThumbnail={srcThumb}
                    onCloseRequest={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default LightboxImage;
