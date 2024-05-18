'use client';

import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import './navbar.css';

export type NavbarCenterProps = PropsWithChildren<{}>;

export type UseNavbarCenterPropsProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof NavbarCenterProps
> &
	NavbarCenterProps;

const NavbarCenter = forwardRef<HTMLDivElement, UseNavbarCenterPropsProps>(
	({ children, className }, ref) => {
		return <div className={cn('navbar-center', className)}>{children}</div>;
	}
);
NavbarCenter.displayName = 'NavbarCenter';

export { NavbarCenter };
