import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {HamburgerMenuIcon} from '@radix-ui/react-icons';
import './styles.css';

const MenuSimple:React.FC = () => {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5} align={'end'} >
          <DropdownMenu.Item className="DropdownMenuItem">
            New Tab <div className="RightSlot">⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            New Window <div className="RightSlot">⌘+N</div>
          </DropdownMenu.Item>

        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MenuSimple;