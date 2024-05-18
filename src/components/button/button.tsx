'use client';

import Lottie from 'lottie-react';
import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import {
	ButtonColorProps,
	ButtonRoundedProps,
	ButtonSizeProps,
	ButtonVariantProps,
} from '.';
import Spinner from '../../../public/assets/Spinner.json';
import { cn } from '../../utils/cn';
import './button.css';

type ButtonProps = PropsWithChildren<{
	/**
	 * The variant of the button.
	 * @default 'solid'
	 */
	variant?: ButtonVariantProps;
	/**
	 * The size of the button.
	 * @default 'md'
	 */
	size?: ButtonSizeProps;
	/**
	 * The rounded of the button.
	 */
	rounded?: ButtonRoundedProps;
	/**
	 * The color of the button.
	 * @default 'basic'
	 */
	color?: ButtonColorProps;
	/**
	 * The button is loading.
	 * @default false
	 */
	loading?: boolean;
	/**
	 * The button is full width.
	 * @default false
	 */
	fullWidth?: boolean;
	/**
	 * The startContent of the button.
	 * @default null
	 */
	startContent?: React.ReactNode;
	/**
	 * The endContent of the button.
	 * @default null
	 */
	endContent?: React.ReactNode;
	/**
	 * The content is full width.
	 * @default false
	 */
	contentFullWidth?: boolean;
}>;

type UseButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	keyof ButtonProps
> &
	ButtonProps;

const Button = forwardRef<HTMLButtonElement, UseButtonProps>(
	(
		{
			variant = 'solid',
			size = 'md',
			rounded,
			color = 'basic',
			loading = false,
			fullWidth = false,
			startContent,
			endContent,
			contentFullWidth = false,
			children,
			className,
			...otherProps
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				className={cn(
					'button',
					`button-variant-${variant}`,
					`button-size-${size}`,
					`button-color-${color}`,

					rounded && `button-rounded-${rounded}`,

					{ 'button-loading': loading },
					{ 'button-fullWidth': fullWidth },
					{ 'button-contentFullWidth': contentFullWidth },

					className
				)}
				{...otherProps}
			>
				{loading && (
					<Lottie animationData={Spinner} className="button-lottie" />
				)}
				{startContent ? startContent : <span></span>}
				{children && <span className={cn('button-content')}>{children}</span>}
				{endContent ? endContent : <span></span>}
			</button>
		);
	}
);
Button.displayName = 'Button';

export { Button };

export type { ButtonProps, UseButtonProps };
