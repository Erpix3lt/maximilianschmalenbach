import React from 'react';
import Image from 'next/image';

const getRandomBoolean = () => Math.random() < 0.5;

const ProjectCard: React.FC<{
  title: string;
  description: string;
  projectClass: string;
  imageUrl: string;
  date: string;
}> = ({ title, description, projectClass, imageUrl, date }) => {
  const showImage = getRandomBoolean();

  return (
    <div className={`project-card p-4 relative ${projectClass}`}>
          <hr className="absolute w-full h-1 border-t border-gray-500 top-0" />
      <hr className="absolute w-full h-1 border-t border-gray-500 bottom-0" />
      <hr className="absolute w-1 h-full border-l border-gray-500 left-0" />
      <hr className="absolute w-1 h-full border-l border-gray-500 right-0" />
      {/* {showImage ? (
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
          className="object-cover rounded-md"
        />
      ) : (
        <div>
          <h2 className=" font-serif mb-2">{title}</h2>
          <p className="font-serif text-xs text-gray-600 mb-4">{description}</p>
          <p className='font-serif text-xs mb-4 text-red-500'>{date}</p>
        </div>
      )} */
      <div>
          <h2 className=" font-serif mb-2">{title}</h2>
          <p className="font-serif text-xs text-gray-600 mb-4">{description}</p>
          <p className='font-serif text-xs mb-4 text-gray-600'>{date}</p>
        </div>}
    </div>
  );
};

export default ProjectCard;
