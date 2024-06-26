

import Menu from './Menu.tsx'
import MenuButton from './MenuButton.tsx'

interface MenuSomething extends React.FC<{ shalin:string, children: React.ReactNode }>{
    Button: typeof MenuButton
}


const Result:MenuSomething = Menu as MenuSomething;
Result.Button = MenuButton;


// Object.assign(Menu, {Button:MenuButton});
// const MenuSomething = Menu as MenuSomething;

// Object.assign(Menu, {Button:MenuButton});

// const MenuSomething = Menu as MenuSomething;


export default Result;