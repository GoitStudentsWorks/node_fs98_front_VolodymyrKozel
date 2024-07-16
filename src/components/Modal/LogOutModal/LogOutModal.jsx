import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router';
import Icon from '../../shared/Icon/Icon';
import Button from '../../shared/Button/Button';
import css from './LogOutModal.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/users/operations';

const LogOutModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  /*   const [isOpen, setIsOpen] = useState(true); */
  // const navigate = useNavigate();
  /*  const handleClose = () => {
    setIsOpen(false);
  };
  */
  const handleLogOut = () => {
    dispatch(logOut());
    closeModal();
  };

  /*   const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  }; */

  /*   useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isOpen) return null; */

  return (
    <div className={css.logoutModal}>
      <Icon
        className={css.closeIcon}
        width="28"
        height="28"
        id="icon-cross"
        onClick={closeModal}
      />
      <h3 className={css.modalLogoutTitle}>Log out</h3>
      <p className={css.modalLogoutText}>Do you really want to leave?</p>
      <div className={css.modalButtonContainer}>
        <Button onClick={handleLogOut} variant="primary">
          Log out
        </Button>
        <Button variant="default" onClick={closeModal}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default LogOutModal;
