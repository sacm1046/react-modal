import React from 'react';
import Modal from '../components/Modal';

const FormMenu = ({open, setOpen, currentMenu}) => {
    const {id, name} = currentMenu;
    return (
        <Modal {...{open, setOpen}}>
            <p>id: { id }</p>
            <p>nombre: { name }</p>
        </Modal>
    )
}

export default FormMenu;