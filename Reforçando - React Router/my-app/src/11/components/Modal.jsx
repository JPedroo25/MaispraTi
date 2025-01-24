import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalContent from "./ModalContent";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
    navigate(-1);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={closeModal}>
          Fechar Modal
        </button>
        <ModalContent />
      </div>
    </div>
  );
};

export default Modal;
