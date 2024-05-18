'use client';

import { LiHTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useMenuContext } from './menu-context';
import './menu.css';

export type MenuSeparatorProps = PropsWithChildren<{}>;

export type UseMenuSeparatorProps = Omit<
	LiHTMLAttributes<HTMLLIElement>,
	keyof MenuSeparatorProps
> &
	MenuSeparatorProps;

const MenuSeparator = forwardRef<HTMLLIElement, UseMenuSeparatorProps>(
	({ children, className }, ref) => {
		const context = useMenuContext();
		return <li className={cn('menu-separator', className)} />;
	}
);
MenuSeparator.displayName = 'MenuSeparator';

export { MenuSeparator };
