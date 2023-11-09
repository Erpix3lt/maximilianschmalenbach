'use client'

// components/SmileyInput.tsx
import { useState } from 'react';

interface SmileyInputProps {
  onAddSmiley: (smiley: string) => void;
  remainingCount: number;
  smileyList: string[];
}

const SmileyInput = ({ onAddSmiley, remainingCount, smileyList }: SmileyInputProps) => {
  const [selectedSmiley, setSelectedSmiley] = useState('');

  const handleSmileyClick = (smiley: string) => {
    if (remainingCount > 0) {
      onAddSmiley(smiley);
      setSelectedSmiley('');
    }
  };

  return (
    <div className="mb-4">
      <p>Remaining smileys to add: {remainingCount}</p>
      <div className="flex">
        {smileyList.map((smiley, index) => (
          <button
            key={index}
            onClick={() => handleSmileyClick(smiley)}
            className={`p-4 m-2 text-3xl cursor-pointer ${
              remainingCount === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={remainingCount === 0}
          >
            {smiley}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SmileyInput;
