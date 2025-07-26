import { useEffect } from 'react';

export const useCursor = () => {
  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleClick = () => {
      const cursor = document.querySelector('body::before') as HTMLElement;
      if (cursor) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        setTimeout(() => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 150);
      }
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('click', handleClick);
    };
  }, []);
};