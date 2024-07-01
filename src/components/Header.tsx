import Menu from './Menu/index.tsx'
import './Header.css'
import MenuSimple from './Menu/MenuSimple.tsx'

const Header:React.FC = () => {
    return(
        <header>
            <div className="site-logo">
                <h1>Logo here</h1>
                <h1>DANIAL</h1>
            </div>
            <MenuSimple/>
            {/* <Menu>
                <Menu.Button>Menu</Menu.Button>
                <Menu.Dropdown>
                    <Menu.Item path={"/"}>Home</Menu.Item>
                    <Menu.Item path={"/projects"}>Projects</Menu.Item>
                    <Menu.Item path={"/resume"}>Resume</Menu.Item>
                </Menu.Dropdown>
            </Menu> */}
        </header>
    )
}

export default Header;

