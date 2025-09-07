import { useState, useEffect } from 'react';

function SpinningApp({ frameCount = 7, path = '/assets/spin/app1/', interval = 250 }) {
  const [frame, setFrame] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      setFrame(1); // Reset to first frame when not hovering
      return;
    }

    const timer = setInterval(() => {
      setFrame(prev => (prev < frameCount ? prev + 1 : 1));
    }, interval);

    return () => clearInterval(timer);
  }, [isHovering, frameCount, interval]);

  return (
    <img
      src={`${path}frame${frame}.png`}
      alt="Spinning App"
      className="w-32 sm:w-40 md:w-48 lg:w-56"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    />
  );
}

export default SpinningApp;
