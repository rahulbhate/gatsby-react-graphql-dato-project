import React, { useState, useEffect } from 'react';
const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(window.pageYOffset);
  // On Scroll
  const onScroll = () => {
    setScrollPos(window.pageYOffset);
  };
  // Add and remove the window listener
  useEffect(() => {
    window.addEventListener('scroll', onScroll); 
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrollPos]);

  return scrollPos;
};

export default useScrollPosition;
