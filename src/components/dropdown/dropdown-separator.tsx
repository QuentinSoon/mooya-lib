'use client';

import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { MenuSeparator } from '../menu';

export type DropdownSeparatorProps = PropsWithChildren<{}>;

export type UseDropdownSeparatorProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof DropdownSeparatorProps
> &
	DropdownSeparatorProps;

const DropdownSeparator = forwardRef<HTMLDivElement, UseDropdownSeparatorProps>(
	({ children, className }, ref) => {
		return <MenuSeparator className={className} />;
	}
);
DropdownSeparator.displayName = 'DropdownItem';

export { DropdownSeparator };
