'use client';

import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { BackdropProps } from '../overlay';
import { Popover, PopoverPlacementsProps } from '../popover';
import './dropdown.css';

export type DropdownProps = PropsWithChildren<{
	open?: boolean;
	setOpen?: (newValue: boolean) => void;
	backdrop?: BackdropProps;
	placement?: PopoverPlacementsProps;
}>;

export type UseDropdownProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof DropdownProps
> &
	DropdownProps;

const Dropdown = forwardRef<HTMLDivElement, UseDropdownProps>(
	(
		{
			backdrop = 'blur',
			placement = 'bottom',
			children,
			open,
			setOpen,
			...otherProps
		},
		ref
	) => {
		return (
			<Popover
				placement={placement}
				backdrop={backdrop}
				open={open}
				setOpen={setOpen}
			>
				{children}
			</Popover>
		);
	}
);
Dropdown.displayName = 'Dropdown';

export { Dropdown };
