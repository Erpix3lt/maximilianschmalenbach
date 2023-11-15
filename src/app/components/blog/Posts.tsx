// components/Posts.tsx
import React from 'react';
import PostPreview from '@/app/components/blog/PostPreview';
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

const Posts: React.FC = async () => {

  const supabase = createServerComponentClient({ cookies })
  const { data, error } = await supabase.from("blog").select("*")

  if (error) {
    console.error(error);
  }

  function convertTimestampToFormattedDate(timestamp: string): string {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
  
    return date.toLocaleDateString('de', options);
  }
  
  return (
    <div className="border border-gray-600 rounded-full p-0">
      {data?.map((post) => (
        <div key={post.id} className='mb-2'>
        <PostPreview       
          post={{
            caption: post.caption,
            created_at: convertTimestampToFormattedDate(post.created_at),
            description: post.description,
            thumbnail_url: post.thumbnail_url,
            image_urls: post.image_urls,
            link_urls: post.link_urls,
          }}
        />
        </div>
      ))}
    </div>
  );
};

export default Posts;
