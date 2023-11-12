// components/Posts.tsx
import React from 'react';
import PostPreview from '@/app/components/blog/PostPreview';
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

const Posts: React.FC = async () => {

  const supabase = createServerComponentClient({ cookies })
  const { data, error } = await supabase.from("blog").select("*")

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
          thumbnail_url="/images/navbar/home.png"
          description={post.description}
          caption={post.caption}
          created_at={convertTimestampToFormattedDate(post.created_at)}
        />
        </div>
      ))}
    </div>
  );
};

export default Posts;
