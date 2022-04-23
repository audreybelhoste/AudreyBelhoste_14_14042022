const Modal = ({ children, isOpened, onClose, isClosable, style }) => {


    return (
		isOpened && (
			<div>
				{isClosable && <p onClick={onClose}>Fermer</p>}
				<div style={style}>
					{ children }
				</div>
			</div>
		)
    );
};

export default Modal