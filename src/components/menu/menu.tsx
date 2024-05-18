'use client';

import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { MenuColorProps, MenuSizeProps, MenuVariantProps } from '.';
import { cn } from '../../utils/cn';
import { MenuContext } from './menu-context';
import './menu.css';

export type MenuProps = PropsWithChildren<{
	/**
	 * The variant of the menu.
	 * @default solid
	 */
	variant?: MenuVariantProps;
	/**
	 * The size of the menu.
	 * @default md
	 */
	size?: MenuSizeProps;
	/**
	 * The color of the menu.
	 * @default basic
	 */
	color?: MenuColorProps;
}>;

export type UseMenuProps = Omit<
	HTMLAttributes<HTMLUListElement>,
	keyof MenuProps
> &
	MenuProps;

const Menu = forwardRef<HTMLUListElement, UseMenuProps>(
	({ variant = 'flat', size = 'md', color = 'basic', children }, ref) => {
		return (
			<MenuContext.Provider value={{ variant, size, color }}>
				<ul ref={ref} className={cn('menu')}>
					{children}
				</ul>
			</MenuContext.Provider>
		);
	}
);
Menu.displayName = 'Menu';

export { Menu };
