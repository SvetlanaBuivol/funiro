import { createPortal } from 'react-dom';
import PropTypes from 'prop-types'

const ModalPortal = ({ isOpen, children }) => {
  return isOpen
    ? createPortal(children, document.getElementById('modal-root'))
    : null;
};

ModalPortal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default ModalPortal;