import { Modal } from "@sketchybar-gray/react";
import { useModal } from "@/contexts/ModalContext";

export default function ModalWrapper() {
  const { modal, closeModal } = useModal();
  const { isOpen, title, message, type, mode, onConfirm } = modal;

  return (
    <Modal
      isOpen={isOpen}
      title={title}
      message={message}
      type={type}
      mode={mode}
      onClose={closeModal}
      onConfirm={onConfirm}
    />
  );
}
