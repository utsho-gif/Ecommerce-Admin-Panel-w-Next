'use client';

import { useStoreModal } from '@/hooks/use-store-modal';
import { Modal } from '../ui/modal';

export const ModalStore = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and catagories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create Store Form
    </Modal>
  );
};
