import { useState, useRef, useEffect, useMemo } from 'react';

const useDraggable = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isDown, setIsDown]         = useState(false);
  const [startX, setStartX]         = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [width, setWidth]           = useState<number>(0);
  const [left, setLeft]             = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDown(true);
    (sliderRef.current as HTMLDivElement).classList.add('active');
    setStartX(e.pageX);
    setScrollLeft((sliderRef.current as HTMLDivElement).scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    (sliderRef.current as HTMLDivElement).classList.remove('active');
  };

  const handleMouseUp = () => {
    setIsDown(false);
    (sliderRef.current as HTMLDivElement).classList.remove('active');
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDown) return;
    e.preventDefault();
    (sliderRef.current as HTMLDivElement).scrollLeft = scrollLeft - (e.pageX - startX) * 2;
    changePosition();
  };

  const changeProgressWidth = () => {
    const scrollWidth = (sliderRef.current as HTMLDivElement).scrollWidth;
    const overplayed = (sliderRef.current as HTMLDivElement).scrollLeft + (sliderRef.current as HTMLDivElement).clientWidth;
    const width = (overplayed / scrollWidth) * 100;
    setWidth(width);
  };

  const changePosition = () => {
    const position = ((sliderRef.current as HTMLDivElement).scrollLeft / (sliderRef.current as HTMLDivElement).clientWidth) * 100;
    setLeft(position);
  };

  useEffect(() => {
    changeProgressWidth();
  }, []);

  const memoizedFunctions = useMemo(
    () => ({
      handleMouseDown,
      handleMouseLeave,
      handleMouseUp,
      handleMouseMove,
    }),
    [handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove]
  );

  return {
    sliderRef,
    isDown,
    ...memoizedFunctions,
    cursorStyle: isDown ? 'grabbing' : 'grab',
    progressStyle: { width: `${width}%`, transform: `translateX(${left}%)` },
  };
};

export default useDraggable;
