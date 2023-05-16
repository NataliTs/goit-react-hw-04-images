import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Backdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ modalData, onModalClose }) => {
  const { largeImageURL, tags } = modalData;
  const handleCloseModal = e => {
    e.preventDefault();
    if (e.target === e.currentTarget || e.code === 'Escape') {
      onModalClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  }, []);

  return createPortal(
    <Backdrop onClick={handleCloseModal}>
      <ModalContent>
        <img src={largeImageURL} alt={tags} />
      </ModalContent>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  modalData: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onModalClose: PropTypes.func,
};
