'use client';

import { useEffect, useState } from 'react';

import { ModalStore } from '@/components/modals/store-modal';

export const ModalProvider = () => {
  const [isMounted, setIsMounter] = useState(false);

  useEffect(() => {
    setIsMounter(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ModalStore />
    </>
  );
};
