// ImagePreview.tsx
import React from 'react';
import Image from 'next/image';
import SmallWrapper from '../wrapper/SmallWrapper';

interface ImagePreviewProps {
    imageList: string[];
    onImageClick: (image: string) => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageList, onImageClick }) => {
    return (
        <div className="border border-gray-600 rounded-full p-0">
            {imageList.map((image, index) => (
                <SmallWrapper key={index}>
                    <div onClick={() => onImageClick(image)} className="cursor-pointer">
                        <img width={384} height={384} src={image} alt={`Image ${index}`} className="rounded-md" />
                    </div>
                </SmallWrapper>
            ))}
        </div>
    );
};

export default ImagePreview;
