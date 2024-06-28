import {useContext} from 'react'
import {MenuContext} from './Menu'

interface Props {
  children: React.ReactNode;
}

const MenuDropdown: React.FC<Props> = ({ children }: Props) => {
    const {isOpen} = useContext(MenuContext);
  return (
        <>
            {isOpen ? (
                <nav className="menu-nav">{children}</nav>
            ) : null}
        </>
  )
  
};

export default MenuDropdown;
