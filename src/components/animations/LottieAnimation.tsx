'use client';

import { useLottie } from 'lottie-react';
import { useEffect, useState } from 'react';

interface LottieAnimationProps {
  animationPath: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  height?: number | string;
  width?: number | string;
}

const LottieAnimation = ({
  animationPath,
  className = '',
  loop = true,
  autoplay = true,
  height = '100%',
  width = '100%',
}: LottieAnimationProps) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Dynamically import animation data
    const loadAnimation = async () => {
      try {
        const animation = await import(`../../../public/animations/${animationPath}`);
        setAnimationData(animation.default);
      } catch (error) {
        console.error('Failed to load animation:', error);
      }
    };

    loadAnimation();
  }, [animationPath]);

  const options = {
    animationData,
    loop,
    autoplay,
  };

  const { View } = useLottie(options);

  return (
    <div className={className} style={{ height, width }}>
      {animationData ? View : <div className="animate-pulse bg-gray-200 rounded-md h-full w-full" />}
    </div>
  );
};

export default LottieAnimation; 