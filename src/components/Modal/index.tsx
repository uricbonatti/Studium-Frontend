import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

import { modalStyle } from './styles';

interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}
const Modal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnEsc={!false}
      onRequestClose={setIsOpen}
      shouldCloseOnOverlayClick={!false}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={modalStyle}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
