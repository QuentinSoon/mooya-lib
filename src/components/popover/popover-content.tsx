'use client';

import { motion } from 'framer-motion';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { usePopoverContext } from '.';
import { cn } from '../../utils/cn';
import './popover.css';

export type PopoverContentProps = PropsWithChildren<{}>;

export type UsePopoverContentProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof PopoverContentProps
> &
	PopoverContentProps;

const PopoverContent = forwardRef<HTMLDivElement, UsePopoverContentProps>(
	({ children, className }, ref) => {
		const context = usePopoverContext();
		return (
			<motion.div
				variants={{
					active: {
						opacity: 1,
						transition: {
							duration: 0.2,
							ease: 'easeOut',
						},
						zoom: 1,
						...getOrigins[context.placement ?? 'bottom'],
					},
					inactive: {
						opacity: 0,
						transition: {
							duration: 0.15,
						},
						zoom: 0.4,
						...getOrigins[context.placement ?? 'bottom'],
					},
				}}
				initial="inactive"
				animate="active"
				exit="inactive"
				className={cn(
					`popover-content overlay-${context.placement ?? 'button'}`,
					'popover-defaultContent',
					className ?? 'popover-defaultContent'
				)}
			>
				{children}
			</motion.div>
		);
	}
);
PopoverContent.displayName = 'PopoverContent';

export { PopoverContent };

const getOrigins = {
	center: { transformOrigin: 'center center' },
	top: { transformOrigin: 'bottom center' },
	right: { transformOrigin: 'left center' },
	left: { transformOrigin: 'right center' },
	bottom: { transformOrigin: 'top center' },
	'top-right': { transformOrigin: 'bottom right' },
	'top-left': { transformOrigin: 'bottom left' },
	'right-top': { transformOrigin: 'left top' },
	'right-bottom': { transformOrigin: 'left bottom' },
	'left-top': { transformOrigin: 'right top' },
	'left-bottom': { transformOrigin: 'right bottom' },
	'bottom-right': { transformOrigin: 'top right' },
	'bottom-left': { transformOrigin: 'top left' },
};
