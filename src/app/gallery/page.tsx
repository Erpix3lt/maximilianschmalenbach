'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

interface PageProps { }

const Page: React.FC<PageProps> = () => {
    const supabase = createClientComponentClient()
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [imageList, setImageList] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const publicUrls: string[] = [];
            const { data, error } = await supabase
                .storage
                .from('blog-images')
                .list();

            if (error) {
                console.error('Error fetching storage bucket entries:', error.message);
            } else {
                for (const entry of data) {
                    const { data: publicUrlData } = await supabase
                        .storage
                        .from('blog-images')
                        .getPublicUrl(entry.name);

                        const publicUrl = publicUrlData.publicUrl;
                        publicUrls.push(publicUrl);
                }
                setImageList(publicUrls);
            }
        };

        fetchImages();
    }, []); // Empty dependency array means this effect runs once on mount

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    return (
        <main className="flex flex-row">
            <div className="w-96 m-4">
                {/* Preview of all images */}
                <ul>
                    {imageList.map((image, index) => (
                        <li key={index} onClick={() => handleImageClick(image)}>
                            <Image width={100} height={100} src={image} alt={`Image ${index}`} className="cursor-pointer" />
                        </li>
                    ))}
                </ul>
            </div>
            {/* View of the current clicked image */}
            <div className="flex-1 m-4">
                {selectedImage && (
                    <>
                        <Image width={300} height={300} src={selectedImage} alt="Selected Image" />
                        <p className="mt-2">{`Filename: ${selectedImage}`}</p>
                    </>
                )}
            </div>
        </main>
    );
};

export default Page;
