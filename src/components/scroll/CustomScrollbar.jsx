import React, { useRef, useEffect } from 'react';
import './CustomScrollbar.css';

function CustomScrollbar({ children }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollbarTrack = scrollContainer.querySelector('.scrollbar-track');
    const scrollbarThumb = scrollContainer.querySelector('.scrollbar-thumb');

    const updateScrollbarPosition = () => {
      const scrollHeight = scrollContainer.scrollHeight;
      const clientHeight = scrollContainer.clientHeight;
      const scrollTop = scrollContainer.scrollTop;

      const thumbHeight = scrollbarThumb.offsetHeight;
      const totalHeight = scrollHeight - clientHeight;

      const thumbTop = (scrollTop / totalHeight) * (clientHeight - thumbHeight);

      scrollbarThumb.style.top = `${thumbTop}px`;
    };

    scrollContainer.addEventListener('scroll', updateScrollbarPosition);
    updateScrollbarPosition();

    return () => {
      scrollContainer.removeEventListener('scroll', updateScrollbarPosition);
    };
  }, []);

  return (
    <div className="scrollbar-container">
      <div className="scrollbar-track">
        <div className="scrollbar-thumb" ref={scrollContainerRef}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default CustomScrollbar;