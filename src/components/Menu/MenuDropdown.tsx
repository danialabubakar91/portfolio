interface Props {
    children:React.ReactNode
}

const MenuDropdown:React.FC<Props> = ({children}:Props) => {
    return(
        <nav className="menu-nav">
            {children}
        </nav>
    )
}

export default MenuDropdown