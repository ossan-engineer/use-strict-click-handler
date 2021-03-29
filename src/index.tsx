import { useState, useEffect, MouseEventHandler, MouseEvent } from "react";

interface MouseDownPosition {
  x?: number;
  y?: number;
}

interface MouseUpPosition {
  x?: number;
  y?: number;
}

const useStrictClickHandler = (callback: () => void) => {
  const [mouseDownPosition, setMouseDownPosition] = useState<MouseDownPosition>(
    {}
  );
  const [mouseUpPosition, setMouseUpPosition] = useState<MouseUpPosition>({});

  const handlers: {
    onMouseDown: MouseEventHandler<HTMLDivElement>;
    onMouseUp: MouseEventHandler<HTMLDivElement>;
  } = {
    onMouseDown: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
      setMouseDownPosition({
        x: e.clientX,
        y: e.clientY,
      }),
    onMouseUp: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
      setMouseUpPosition({
        x: e.clientX,
        y: e.clientY,
      }),
  };

  useEffect(() => {
    if (
      Object.keys(mouseDownPosition).length > 0 &&
      Object.keys(mouseUpPosition).length > 0 &&
      mouseDownPosition.x === mouseUpPosition.x &&
      mouseDownPosition.y === mouseUpPosition.y
    ) {
      callback();
      setMouseDownPosition({});
      setMouseUpPosition({});
    }
  }, [mouseDownPosition, mouseUpPosition, callback]);

  return { handlers };
};

export default useStrictClickHandler;
