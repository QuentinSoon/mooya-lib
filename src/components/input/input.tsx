'use client';

import {
	InputHTMLAttributes,
	PropsWithChildren,
	forwardRef,
	useRef,
} from 'react';
import { InputVariantProps } from '.';
import { cn } from '../../utils/cn';
import './input.css';

type InputProps = PropsWithChildren<{
	/**
	 * The variant of the input.
	 * @default 'default'
	 */
	variant?: InputVariantProps;
	/**
	 * The id of the input.
	 * @default 'inputId'
	 */
	id?: string;
}>;

type UseInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	keyof InputProps
> &
	InputProps;

const Input = forwardRef<HTMLInputElement, UseInputProps>(
	({ variant = 'default', placeholder, id, ...otherProps }, ref) => {
		const inputRef = useRef<HTMLInputElement>(null);

		return (
			<label
				htmlFor={id}
				className={cn('wrapper', `wrapper-variant-${variant}`)}
			>
				<input
					id={id}
					className={cn('wrapper-input')}
					placeholder={placeholder}
					ref={inputRef}
				/>
				<span className={cn('wrapper-content')}>{placeholder}</span>
			</label>
		);
	}
);
Input.displayName = 'Input';

export { Input };

export type { InputProps, UseInputProps };
