
import React from 'react'
import useToggle from '../../hooks/useToggle.tsx';

interface Props {
    children : React.ReactNode;
}

interface MenuContextType {
    isOpen: boolean;
    runToggle: () => void;
  }
  
const defaultValue: MenuContextType = {
    isOpen: false,
    runToggle: () => {},
};

const MenuContext = React.createContext<MenuContextType>(defaultValue);
export {MenuContext}

const Menu:React.FC<Props> = ({children}:Props) => {
    const [isOpen, runToggle] = useToggle();

    return(
        <MenuContext.Provider value={{isOpen,runToggle}}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export default Menu;