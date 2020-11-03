import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const Modal_ = ({ children, open, setOpen }) => {


    const afterOpenModal = () => {
    }

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <Modal
            isOpen={open}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            closeTimeoutMS={250}
        >

            <button onClick={closeModal}>Open Modal</button>
            {children}

        </Modal>
    )
}

export default Modal_;
