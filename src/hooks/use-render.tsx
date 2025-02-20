'use client';

import { useEffect, useState } from 'react';

export const useRender = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return isRendered;
};
