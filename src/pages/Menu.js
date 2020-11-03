import React, { useState } from 'react';
import FormMenu from './FormMenu'



const Menu = () => {

    const [open, setOpen] = useState(false);
    const [currentMenu, setCurrentMenu] = useState({})

    const openModal = (menu) => {
        setOpen(true);
        setCurrentMenu(menu)
    }


    const menus = [
        { id: 1, name: "menu1" },
        { id: 2, name: "menu2" },
        { id: 3, name: "menu3" },
        { id: 4, name: "menu4" }
    ]

    return (
        <>
            <FormMenu {...{ open, setOpen, currentMenu }} />
            {
                menus.length > 0 &&
                menus.map(menu => (
                    <button key={menu.id} onClick={() => openModal(menu)}>{menu.name}</button>
                ))
            }
        </>
    )
}

export default Menu;