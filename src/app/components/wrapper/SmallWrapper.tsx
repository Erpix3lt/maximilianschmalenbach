// components/SmallWrapper.tsx
import React, { ReactNode } from 'react';

interface SmallWrapperProps {
  children: ReactNode;
}

const SmallWrapper: React.FC<SmallWrapperProps> = ({ children }) => {
  return (
    <div className="border border-black rounded-lg max-w-fit">
      {children}
    </div>
  );
};

export default SmallWrapper;
