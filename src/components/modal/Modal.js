import './Modal.css';

const Modal = ({ children, isOpened, onClose, isClosable, style }) => {

    return (
		isOpened && (
			<div class="modal">
				<div class="modal-content" style={style}>
					{isClosable && 
						<button class="modal-close" onClick={onClose}>
							<span class="modal-sr-only">Close</span>
						</button>
					}
					<div>
						{ children }
					</div>
				</div>
			</div>
		)
    );
};

export default Modal