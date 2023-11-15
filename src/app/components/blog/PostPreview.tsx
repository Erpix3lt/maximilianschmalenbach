// components/Post.tsx
'use client'
import React from 'react';
import SmallWrapper from '@/app/components/wrapper/SmallWrapper';
import LargeWrapper from '@/app/components/wrapper/LargeWrapper';
import Image from 'next/image';
import { usePostStore } from '@/app/stores/PostStore';

interface PostProps {
  post: Post;
}

type Post = {
  caption: string
  created_at: string
  description: string
  thumbnail_url: string
  image_urls: string[]
  link_urls: string[]
};

const PostPreview: React.FC<PostProps> = ({ post }) => {


  const handleClick = () => {
    // Set the post in the Zustand store when the component is clicked
    usePostStore.setState({      post: {
      caption: 'New Caption',
      created_at: '2023-01-01',
      description: 'New Description',
      thumbnail_url: 'new_thumbnail_url.jpg',
      image_urls: ['new_image_url.jpg'],
      link_urls: ['https://example.com/new'],
    }, });
  };
  
  return (
    <div onClick={handleClick}>
      <LargeWrapper>
        <h2 className='text-lg font-serif mb-2'>{post.created_at}</h2>
        <SmallWrapper>
          <p className="text-sm text-white-100 font-serif">{post.caption}</p>
        </SmallWrapper>
        <div>
          {/* Image displayed only on hover */}
          <Image
            src={post.thumbnail_url}
            alt="Post Image"
            className="hidden hover:block"
            width={300}
            height={300}
          />

          {/* Text always displayed */}
          <div className="text-white-100 mt-1">
            <p className='text-xs font-serif'>{post.description}</p>
          </div>
        </div>

        {/* Caption always displayed */}
      </LargeWrapper>
    </div>
  );
};

export default PostPreview;
