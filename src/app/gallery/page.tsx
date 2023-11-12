'use client'

import React, { useState } from 'react';
import Image from 'next/image';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const imageList: string[] = [
    'https://gtgxkdjpbzwfhrvpqbnz.supabase.co/storage/v1/object/public/blog-images/00002-17165681-removebg-preview.png',
    'https://gtgxkdjpbzwfhrvpqbnz.supabase.co/storage/v1/object/public/blog-images/00002-17165681.png?t=2023-11-12T15%3A47%3A41.358Z',
    'https://gtgxkdjpbzwfhrvpqbnz.supabase.co/storage/v1/object/public/blog-images/00002-17165681.png?t=2023-11-12T15%3A47%3A41.358Z'
  ];

  return (
    <main className="flex flex-row">
      <div className="w-96 m-4">
        {/* Preview of all images */}
        <ul>
          {imageList.map((image, index) => (
            <li key={index} onClick={() => handleImageClick(image)}>
              <img  src={image} alt={`Image ${index}`} className="cursor-pointer w-full" />
            </li>
          ))}
        </ul>
      </div>
      {/* View of the current clicked image */}
      <div className="flex-1 m-4">
        {selectedImage && (
          <>
            <img src={selectedImage}  alt="Selected Image" className="w-full h-full" />
            <p className="mt-2">{`Filename: ${selectedImage}`}</p>
          </>
        )}
      </div>
    </main>
  );
};

export default Page;
