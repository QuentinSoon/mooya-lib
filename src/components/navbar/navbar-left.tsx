'use client';

import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import './navbar.css';

export type NavbarLeftProps = PropsWithChildren<{}>;

export type UseNavbarLeftPropsProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof NavbarLeftProps
> &
	NavbarLeftProps;

const NavbarLeft = forwardRef<HTMLDivElement, UseNavbarLeftPropsProps>(
	({ children, className }, ref) => {
		return <div className={cn('navbar-left', className)}>{children}</div>;
	}
);
NavbarLeft.displayName = 'NavbarLeft';

export { NavbarLeft };
