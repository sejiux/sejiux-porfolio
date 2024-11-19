import React from 'react';

const GridPattern = () => {
  return (
    <div className="absolute inset-0 h-full -z-10 w-full dark:bg-background bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] bg-[length:55px_55px]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white mask"></div>
    </div>
  );
};

export default GridPattern;