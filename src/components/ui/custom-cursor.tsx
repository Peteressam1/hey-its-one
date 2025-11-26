import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"]'
      );
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    window.addEventListener('mousemove', moveCursor);
    addHoverListeners();
    
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: cursorPos.x,
        top: cursorPos.y,
        width: isHovering ? '12px' : '8px',
        height: isHovering ? '12px' : '8px',
        background: 'hsl(var(--primary))',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.15s ease, height 0.15s ease',
      }}
    />
  );
};
