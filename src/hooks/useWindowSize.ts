import { useEffect, useState } from 'react';

export type WindowTypeSize = {
  width: number | undefined;
  height: number | undefined;
};

export type WindowTypeState = WindowTypeSize & {
  isTabletView: boolean | undefined;
  isMobileView: boolean | undefined;
  isResponsiveDesign: boolean | undefined;
};

export const MOBILE_WIDTH = 481;
export const TABLET_WIDTH = 1025;

export const useWindowSize = (): WindowTypeState => {
  const [windowSize, setWindowSize] = useState<WindowTypeSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize(): void {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isTabletView =
    !!windowSize?.width &&
    windowSize.width < TABLET_WIDTH &&
    windowSize.width > MOBILE_WIDTH - 1;
  const isMobileView = !!windowSize?.width && windowSize.width < MOBILE_WIDTH;

  return {
    width: windowSize.width,
    height: windowSize.height,
    isTabletView,
    isMobileView,
    isResponsiveDesign: isMobileView || isTabletView,
  };
};
