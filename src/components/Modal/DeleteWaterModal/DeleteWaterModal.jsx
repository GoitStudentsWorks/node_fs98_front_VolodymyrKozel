import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router';
import Icon from '../../shared/Icon/Icon';
import Button from '../../shared/Button/Button';
import css from './DeleteWaterModal.module.css';

const DeleteWaterModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [iconSize, setIconSize] = useState({ width: 28, height: 28 });

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    const updateIconSize = () => {
      if (window.innerWidth < 375) {
        setIconSize({ width: 24, height: 24 });
        setIconSize({ width: 28, height: 28 });
      }
    };

    updateIconSize();
    window.addEventListener('resize', updateIconSize);
    document.addEventListener('keydown', handleKeyDown);

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <div className={css.deleteModal}>
        <Icon
          className={css.closeIcon}
          width={iconSize.width}
          height={iconSize.height}
          id="icon-cross"
          onClick={handleClose}
        />
        <h3 className={css.modalDeleteTitle}>Delete entry</h3>
        <p className={css.modalDeleteText}>
          Are you sure you want to delete the entry?
        </p>
        <div className={css.modalButtonContainer}>
          <Button className={css.modalButon} variant="primary">
            Delete
          </Button>
          <Button
            className={css.modalButon}
            variant="default"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteWaterModal;
