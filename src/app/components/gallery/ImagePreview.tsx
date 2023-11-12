// ImagePreview.tsx
import React from 'react';
import Image from 'next/image';
import LargeWrapper from '../wrapper/LargeWrapper';

interface ImagePreviewProps {
    imageList: string[];
    onImageClick: (image: string) => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageList, onImageClick }) => {
    return (
        <div className="border border-gray-600 rounded-full p-0">
            {imageList.map((image, index) => (
                <LargeWrapper key={index}>
                    <div onClick={() => onImageClick(image)} className="cursor-pointer">
                        <Image width={384} height={384} src={image} alt={`Image ${index}`} className="rounded-md" />
                    </div>
                </LargeWrapper>
            ))}
        </div>
    );
};

export default ImagePreview;
