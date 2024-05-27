'use client';

import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import './navbar.css';

type NavbarProps = PropsWithChildren<{}>;

type UseNavbarPropsProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof NavbarProps
> &
	NavbarProps;

const Navbar = forwardRef<HTMLDivElement, UseNavbarPropsProps>(
	({ children, className }, ref) => {
		return <div className={cn('navbar', className)}>{children}</div>;
	}
);
Navbar.displayName = 'Navbar';

export { Navbar };
export type { NavbarProps, UseNavbarPropsProps };
