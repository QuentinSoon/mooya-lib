'use client';

import { createContext, useContext } from 'react';
import { PopoverProps } from '.';

const PopoverContext = createContext<PopoverProps>({});

const usePopoverContext = (): PopoverProps => {
	const context = useContext(PopoverContext);
	if (!context) {
		throw new Error(
			'usePopoverContext need to be use in PopoverContextProvider'
		);
	}
	return context;
};

export { PopoverContext, usePopoverContext };
