'use client';

import { Modal } from '@/components/ui/modal';

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal
        isOpen
        title="Modal Title"
        description="Modal Description"
        onClose={() => {}}
      >
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
