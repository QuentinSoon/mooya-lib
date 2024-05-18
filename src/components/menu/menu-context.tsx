'use client';

import { createContext, useContext } from 'react';
import { MenuProps } from '.';

const MenuContext = createContext<MenuProps>({});

const useMenuContext = (): MenuProps => {
	const context = useContext(MenuContext);
	if (!context) {
		throw new Error('useMenuContext need to be use in PopoverContextProvider');
	}
	return context;
};

export { MenuContext, useMenuContext };
