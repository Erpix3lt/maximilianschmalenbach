// ClickedImageView.tsx
import React from 'react';
import Image from 'next/image';
import SmallWrapper from '../wrapper/SmallWrapper';

interface ClickedImageViewProps {
  selectedImage: string | null;
}

const extractFilenameFromUrl = (url: string) => {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 1];
};

const ClickedImageView: React.FC<ClickedImageViewProps> = ({ selectedImage }) => {
  const filename = selectedImage ? extractFilenameFromUrl(selectedImage) : null;

  return (
    <div >
      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Selected Image" className="rounded-md" />
          <SmallWrapper> <p className="text-xs text-white font-serif">{`${filename}`}</p></SmallWrapper>
          </div>
      )}
    </div>
  );
};

export default ClickedImageView;
