import { cn } from '@/lib/utils';
import React, { FC } from 'react';

interface GridPatternProps {
  gradient?: boolean;
}

const GridPattern: FC<GridPatternProps> = ({
  gradient
}) => {
  return (
    <div className="absolute inset-0 h-full -z-10 w-full bg-background bg-grid-white/[0.2] bg-[length:55px_55px]">
      {/* Radial gradient for the container to give a faded look */}
      <div className={cn("absolute pointer-events-none inset-0 flex items-center justify-center bg-background mask", gradient && "bg-gradient")} />
    </div>
  );
};

export default GridPattern;