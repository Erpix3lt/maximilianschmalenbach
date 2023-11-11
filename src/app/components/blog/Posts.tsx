// components/Posts.tsx
import React from 'react';
import Post from '@/app/components/blog/Post';
import LargeWrapper from '../wrapper/LargeWrapper';

const exampleData = [
  {
    id: 1,
    caption: 'What about digital fashion',
    content:
      'This website is part of my bachelor thesis “What about digital fashion”, in which I want to explore the look of future digital fashion artefacts, in a participatory way! You are now invited to take part in a survey, creating digital clothing items on your own. After that you can also rate the creative artefacts of other people. Please try to stay true to yourself and be creative. Thanks for taking the time!'
      ,
    imageSrc: '/images/navbar/home.png', // Example URL
  },
  {
    id: 2,
    caption: 'Garments Digital',
    content:
      'This is part of my sixth semester at Code & Context. We are working on a digital Space, enabling the User to prototype their own garments, with the use of three.js. We are hoping to democratize the process of designing clothing, both in the digital and analog world.',
    imageSrc: '/images/navbar/home.png', // Example URL
  },
  {
    id: 2,
    caption: 'Garments Digital',
    content:
      'This is part of my sixth semester at Code & Context. We are working on a digital Space, enabling the User to prototype their own garments, with the use of three.js. We are hoping to democratize the process of designing clothing, both in the digital and analog world.',
    imageSrc: '/images/navbar/home.png', // Example URL
  },
  {
    id: 2,
    caption: 'Garments Digital',
    content:
      'This is part of my sixth semester at Code & Context. We are working on a digital Space, enabling the User to prototype their own garments, with the use of three.js. We are hoping to democratize the process of designing clothing, both in the digital and analog world.',
    imageSrc: '/images/navbar/home.png', // Example URL
  },
  {
    id: 2,
    caption: 'Garments Digital',
    content:
      'This is part of my sixth semester at Code & Context. We are working on a digital Space, enabling the User to prototype their own garments, with the use of three.js. We are hoping to democratize the process of designing clothing, both in the digital and analog world.',
    imageSrc: '/images/navbar/home.png', // Example URL
  },
  {
    id: 2,
    caption: 'Garments Digital',
    content:
      'This is part of my sixth semester at Code & Context. We are working on a digital Space, enabling the User to prototype their own garments, with the use of three.js. We are hoping to democratize the process of designing clothing, both in the digital and analog world.',
    imageSrc: '/images/navbar/home.png', // Example URL
  },
];

const Posts: React.FC = () => {
  return (
    <LargeWrapper>
      {exampleData.map((post) => (
        <div key={post.id} className='mb-2'>
        <Post       
          imageSrc={post.imageSrc}
          textContent={post.content}
          caption={post.caption}
        />
        </div>
      ))}
    </LargeWrapper>
  );
};

export default Posts;
