// components/Post.tsx
import React from 'react';
import SmallWrapper from '@/app/components/wrapper/SmallWrapper';
import LargeWrapper from '@/app/components/wrapper/LargeWrapper';
import Image from 'next/image';

interface PostProps {
  imageSrc: string;
  textContent: string;
  caption: string;
}

const Post: React.FC<PostProps> = ({ imageSrc, textContent, caption }) => {
  return (
    <LargeWrapper>
      <SmallWrapper>
        <p className="text-sm text-black font-serif">{caption}</p>
      </SmallWrapper>
      <div>
          {/* Image displayed only on hover */}
          <Image
            src={imageSrc}
            alt="Post Image"
            className="hidden hover:block"
            width={300}
            height={300}
          />

          {/* Text always displayed */}
          <div className="text-black">
            <p className='text-xs font-serif'>{textContent}</p>
          </div>
        </div>

        {/* Caption always displayed */}
    </LargeWrapper>
  );
};

export default Post;
