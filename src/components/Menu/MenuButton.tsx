import React from 'react'

interface Props {
    children: React.ReactNode
}

const MenuButton:React.FC<Props> = ({children}:Props) => {
    return(
        <button>{children}</button>
    )
}

export default MenuButton;