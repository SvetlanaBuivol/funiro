import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { Backdrop, MenuContant } from './MobileMenuModal.styled';
import UserAvatar from '../../UserActions/UserAvatar/UserAvatar';

const MobileMenuModal = ({ onClose }) => {
    const handleKeyDown = event => {
    if (event.key === 'Escape') {
      onClose();
    }
    };
    
    const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
    };
    
    useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onClose]);
    
    return (
        <Backdrop onClick={handleBackdropClick}>
            <MenuContant>
                <UserAvatar/>
            </MenuContant>
        </Backdrop>
    )
}

MobileMenuModal.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default MobileMenuModal