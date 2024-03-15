// components/LightboxImage.js

import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Image from 'next/image';

const LightboxImage = ({ src, alt, width, height }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div onClick={() => setIsOpen(true)} className='cursor-pointer my-5'>
                <Image 
                src={src} 
                alt={alt} 
                width={width}
                height={height}
                className='w-full'
                />
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={src}
                    onCloseRequest={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default LightboxImage;
