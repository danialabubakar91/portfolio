import React from 'react'

interface Props {
    children: React.ReactNode
}

const MenuButton:React.FC<Props> = ({children}:Props) => {
    return(
        <button className="menu-btn">{children}</button>
    )
}

export default MenuButton;