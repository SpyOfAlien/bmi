import { RefObject, useCallback, useEffect, useState } from "react";

import useEventListener from "../hooks/useEventListener";

function useElementSize(elementRef) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  // Prevent too many rendering using useCallback
  const updateSize = useCallback(() => {
    const node = elementRef?.current;
    if (node) {
      setSize({
        width: node.offsetWidth || 0,
        height: node.offsetHeight || 0,
      });
    }
  }, [elementRef]);

  // Initial size on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      // Add event listener
      window.addEventListener("resize", updateSize);
      updateSize();

      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  return size;
}

export default useElementSize;
