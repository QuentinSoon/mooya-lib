'use client';

import { AnimatePresence } from 'framer-motion';
import {
	Children,
	HTMLAttributes,
	PropsWithChildren,
	forwardRef,
	useState,
} from 'react';
import { PopoverContext, PopoverPlacementsProps } from '.';
import { cn } from '../../utils/cn';
import { BackdropProps, Overlay } from '../overlay';
import './popover.css';

export type PopoverProps = PropsWithChildren<{
	open?: boolean;
	setOpen?: (newValue: boolean) => void;
	backdrop?: BackdropProps;
	placement?: PopoverPlacementsProps;
	onHover?: boolean;
}>;

export type UsePopoverProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof PopoverProps
> &
	PopoverProps;

const Popover = forwardRef<HTMLDivElement, UsePopoverProps>(
	(
		{ backdrop = 'blur', placement = 'bottom', children, ...otherProps },
		ref
	) => {
		const [trigger, content] = Children.toArray(children);
		const [open, setOpen] = useState(false);

		return (
			<PopoverContext.Provider value={{ open, setOpen, placement, backdrop }}>
				<div className={cn('popover')}>
					{trigger}
					<AnimatePresence>
						{open && (
							<Overlay
								open={open}
								setOpen={setOpen}
								backdrop={backdrop}
								placement={placement}
							>
								{content}
							</Overlay>
						)}
					</AnimatePresence>
				</div>
			</PopoverContext.Provider>
		);
	}
);
Popover.displayName = 'Popover';

export { Popover };
