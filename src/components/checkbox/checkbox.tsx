'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChangeEvent, InputHTMLAttributes, forwardRef, useState } from 'react';
import { CheckboxColorProps, CheckboxRoundedProps, CheckboxSizeProps } from '.';
import { cn } from '../../utils/cn';
import './checkbox.css';

type CheckboxProps = {
	/**
	 * The size of the button.
	 * @default 'md'
	 */
	size?: CheckboxSizeProps;
	/**
	 * The rounded of the button.
	 */
	rounded?: CheckboxRoundedProps;
	/**
	 * The color of the button.
	 * @default 'basic'
	 */
	color?: CheckboxColorProps;
};

type UseCheckboxProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	keyof CheckboxProps
> &
	CheckboxProps;

const Checkbox = forwardRef<HTMLInputElement, UseCheckboxProps>(
	(
		{
			size = 'md',
			color = 'basic',
			rounded,
			checked,
			defaultChecked,
			className,
			...otherProps
		},
		ref
	) => {
		const [isChecked, setIsChecked] = useState<boolean>(
			defaultChecked ?? false
		);
		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			setIsChecked(e.target.checked);
		};

		const checker = checked ?? isChecked;

		return (
			<label className="wrapper">
				<input
					ref={ref}
					hidden
					type="checkbox"
					checked={checker}
					onChange={otherProps.onChange ?? handleChange}
				/>
				<AnimatePresence>
					<motion.span
						className={cn(
							'checkbox',
							`checkbox-size-${size}`,
							`checkbox-color-${color}`,

							rounded && `checkbox-rounded-${rounded}`
						)}
					>
						<motion.svg
							className={cn('checkbox-svg', className)}
							animate={checker ? 'checked' : 'unchecked'}
							initial={true}
							variants={{
								checked: {
									opacity: 1,
									scale: 1,
									transition: { duration: 0.2 },
								},
								unchecked: {
									opacity: 0,
									scale: 0.6,
									transition: { duration: 0.2 },
								},
							}}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 26 26"
							strokeWidth="3.5"
						>
							<motion.path
								animate={checker ? 'checked' : 'unchecked'}
								variants={{
									checked: {
										pathLength: 1,
										opacity: 1,
										transition: { duration: 0.15, delay: 0.2 },
									},
									unchecked: {
										pathLength: 0,
										opacity: 0,
										transition: { duration: 0.1 },
									},
								}}
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5 12.75l6 6 9-10"
							/>
						</motion.svg>
					</motion.span>
				</AnimatePresence>
			</label>
		);
	}
);
Checkbox.displayName = 'Checkbox';

export { Checkbox };

export type { CheckboxProps, UseCheckboxProps };
