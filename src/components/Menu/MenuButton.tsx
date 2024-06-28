import React from 'react'
import { MenuContext } from "./Menu.tsx"

interface Props {
    children: React.ReactNode;
}

const MenuButton:React.FC<Props> = ({children}:Props) => {
    const {runToggle} = React.useContext(MenuContext);
    return(
        <button onClick={runToggle} className="menu-btn">{children}</button>
    )
}

export default MenuButton;