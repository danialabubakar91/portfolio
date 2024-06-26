import Result from './Menu/index.tsx'
// import Menu from './Menu/Menu.tsx'
// import MenuButton from './Menu/MenuButton.tsx'


const Header:React.FC = () => {
    return(
        <header>
            <div className="site-logo">
                <h1>Logo here</h1>
                <h1>DANIAL</h1>
            </div>
            <Result shalin={"kupu"}>
                <Result.Button>Menu</Result.Button>
            </Result>
        </header>
    )
}

export default Header;

