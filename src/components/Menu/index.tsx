import Menu from './Menu.tsx'
import MenuButton from './MenuButton.tsx'
import MenuDropdown from './MenuDropdown.tsx'
import MenuItem from './MenuItem.tsx'

interface MenuInterface extends React.FC<{children: React.ReactNode }>{
    Button: typeof MenuButton;
    Dropdown: typeof MenuDropdown;
    Item: typeof MenuItem;
}

const all:MenuInterface = Menu as MenuInterface;
all.Button = MenuButton;
all.Dropdown = MenuDropdown;
all.Item = MenuItem;

export default all;