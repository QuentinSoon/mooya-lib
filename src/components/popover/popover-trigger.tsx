'use client';

import { Children, HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { usePopoverContext } from '.';
import './popover.css';

export type PopoverTriggerProps = PropsWithChildren<{}>;

export type UsePopoverTriggerProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof PopoverTriggerProps
> &
	PopoverTriggerProps;

const PopoverTrigger = forwardRef<HTMLDivElement, UsePopoverTriggerProps>(
	({ children }, ref) => {
		const context = usePopoverContext();
		if (!children) {
			throw new Error('PopoverTrigger must have a child');
		}
		if (Children.count(children) !== 1) {
			throw new Error('PopoverTrigger must have exactly one child');
		}
		if (typeof children !== 'object') {
			throw new Error('PopoverTrigger must be an object');
		}

		return (
			<span onClick={() => context?.setOpen?.(!context.open)}>{children}</span>
		);
	}
);
PopoverTrigger.displayName = 'PopoverTrigger';

export { PopoverTrigger };
