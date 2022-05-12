import propTypes from 'prop-types'
import { useEffect } from 'react';
import './Modal.css';

const Modal = ({ children, isOpened, onClose, style }) => {
	useEffect(() => {
		function handleEscapeKey(e) {
			if (e.code === 'Escape') {
				onClose();
			}
		}
	
		document.addEventListener('keydown', handleEscapeKey)
		return () => document.removeEventListener('keydown', handleEscapeKey)
  	}, [])

    return (
		isOpened && (
			<div className="modal" onClick={onClose}>
				<div 
					className="modal-content" 
					style={style} onClick={e => {
          			e.stopPropagation();
        		}}>
					<button className="modal-close" onClick={onClose}>
						<span className="modal-sr-only">Close</span>
					</button>
					<div>
						{ children }
					</div>
				</div>
			</div>
		)
    );
};

Modal.propTypes = {
	children: propTypes.string, 
	isOpened: propTypes.bool, 

}

export default Modal