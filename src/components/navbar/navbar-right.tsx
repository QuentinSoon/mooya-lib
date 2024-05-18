'use client';

import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import './navbar.css';

export type NavbarRightProps = PropsWithChildren<{}>;

export type UseNavbarRightPropsProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof NavbarRightProps
> &
	NavbarRightProps;

const NavbarRight = forwardRef<HTMLDivElement, UseNavbarRightPropsProps>(
	({ children, className }, ref) => {
		return <div className={cn('navbar-right', className)}>{children}</div>;
	}
);
NavbarRight.displayName = 'NavbarRight';

export { NavbarRight };
