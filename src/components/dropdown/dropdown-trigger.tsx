'use client';

import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { PopoverTrigger } from '../popover';

export type DropdownTriggerProps = PropsWithChildren<{}>;

export type UseDropdownTriggerProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof DropdownTriggerProps
> &
	DropdownTriggerProps;

const DropdownTrigger = forwardRef<HTMLDivElement, UseDropdownTriggerProps>(
	({ children }, ref) => {
		return <PopoverTrigger>{children}</PopoverTrigger>;
	}
);
DropdownTrigger.displayName = 'DropdownTrigger';

export { DropdownTrigger };
