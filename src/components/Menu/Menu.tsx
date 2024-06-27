
import React from 'react'

interface Props {
    children : React.ReactNode;
}


const Menu:React.FC<Props> = ({children}:Props) => {
    return(
        <div className="menu">
            {children}
        </div>
    )
}

export default Menu;