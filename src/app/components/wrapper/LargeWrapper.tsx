// components/LargeWrapper.tsx
import React, { ReactNode } from 'react';

interface LargeWrapperProps {
  children: ReactNode;
}

const LargeWrapper: React.FC<LargeWrapperProps> = ({ children }) => {
  return (
    <div className="border border-gray-800 rounded-full p-0">
      {children}
    </div>
  );
};

export default LargeWrapper;
