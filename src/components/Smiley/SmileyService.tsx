'use client'

// components/SmileyService.tsx
import { useState } from 'react';
import SmileyInput from './SmileyInput';
import SmileyGallery from './SmileyGallery';

// Define the list of smileys
const smileyList = ['😊', '😄', '😍', '🤩', '😎', '🥳', '😇', '😂', '🤣', '😇'];

const SmileyService = () => {
  const [gallery, setGallery] = useState<string[]>([]);
  const [remainingCount, setRemainingCount] = useState<number>(5);

  const addSmileyToGallery = (smiley: string) => {
    if (remainingCount > 0) {
      setGallery([...gallery, smiley]);
      setRemainingCount(remainingCount - 1);
    }
  };

  return (
    <div className="p-4">
      <SmileyInput
        onAddSmiley={addSmileyToGallery}
        remainingCount={remainingCount}
        smileyList={smileyList}
      />
      <SmileyGallery gallery={gallery} />
    </div>
  );
};

export default SmileyService;
