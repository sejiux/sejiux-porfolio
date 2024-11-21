
const Spotlights = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 250 163"
      fill="none"
      className="absolute -top-14 w-[1000px] h-auto"
    >
      <g filter="url(#a)">
        <path 
          fill="url(#b)" 
          d="M102.953 15h45.708S201.988 113.266 238 140a333.799 333.799 0 0 0-220.529-.854L15 140c48.478-49.856 87.953-125 87.953-125z"
        />
      </g>
      <g filter="url(#c)">
        <path 
          fill="url(#d)" 
          d="M119.401 20h13.31S174.907 124.555 198 153c-43.661-25.669-97.732-25.961-141.667-.764L55 153c31.087-53.046 64.401-133 64.401-133z"
        />
      </g>
      <defs>
        <linearGradient 
          id="b" 
          x1="126.5" 
          x2="126.5" 
          y1="15" 
          y2="140" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity=".14"/>
          <stop offset="1" stopColor="#010804" stopOpacity="0"/>
        </linearGradient>
        <linearGradient 
          id="d" 
          x1="126.5" 
          x2="126.5" 
          y1="20" 
          y2="153" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity=".14"/>
          <stop offset="1" stopColor="#010804" stopOpacity="0"/>
        </linearGradient>
        <filter 
          id="a" 
          width="253" 
          height="155" 
          x="0" 
          y="0" 
          colorInterpolationFilters="sRGB" 
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur result="effect1_foregroundBlur_941_26177" stdDeviation="7.5"/>
        </filter>
        <filter 
          id="c" 
          width="163" 
          height="153" 
          x="45" 
          y="10" 
          colorInterpolationFilters="sRGB" 
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur result="effect1_foregroundBlur_941_26177" stdDeviation="5"/>
        </filter>
      </defs>
    </svg>
  );
};

export default Spotlights;