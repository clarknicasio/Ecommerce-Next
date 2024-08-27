import React from 'react';
import Image from 'next/image';


const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="/spinner.gif"
        alt="Loading"
        width={64}
        height={64}
        unoptimized 
      />
    </div>
  );
};

export default Loading;
