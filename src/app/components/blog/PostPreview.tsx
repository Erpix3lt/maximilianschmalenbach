// components/Post.tsx
import React from 'react';
import SmallWrapper from '@/app/components/wrapper/SmallWrapper';
import LargeWrapper from '@/app/components/wrapper/LargeWrapper';
import Image from 'next/image';

interface PostProps {
  thumbnail_url: string;
  description: string;
  caption: string;
  created_at: string;
}

const PostPreview: React.FC<PostProps> = ({ thumbnail_url, description, caption, created_at }) => {
  return (
    <LargeWrapper>
      <h2 className='text-lg font-serif mb-2'>{created_at}</h2>
      <SmallWrapper>
        <p className="text-sm text-white-100 font-serif">{caption}</p>
      </SmallWrapper>
      <div>
          {/* Image displayed only on hover */}
          <Image
            src={thumbnail_url}
            alt="Post Image"
            className="hidden hover:block"
            width={300}
            height={300}
          />

          {/* Text always displayed */}
          <div className="text-white-100 mt-1">
            <p className='text-xs font-serif'>{description}</p>
          </div>
        </div>

        {/* Caption always displayed */}
    </LargeWrapper>
  );
};

export default PostPreview;
