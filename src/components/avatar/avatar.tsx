'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { HTMLAttributes, forwardRef, useMemo } from 'react';
import { AvatarColorProps, AvatarRoundedProps, AvatarSizeProps } from '.';
import { useImage } from '../../hooks/useImage';
import { cn } from '../../utils/cn';
import './avatar.css';

export type AvatarProps = {
	/**
	 * The source of the image to display.
	 */
	src?: string;
	/**
	 * The size of the avatar.
	 * @default 'md'
	 */
	size?: AvatarSizeProps;
	/**
	 * The rounded of the avatar.
	 * @default 'full'
	 */
	rounded?: AvatarRoundedProps;
	/**
	 * The color of the avatar.
	 * @default 'basic'
	 */
	color?: AvatarColorProps;
};

export type UseAvatarProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof AvatarProps
> &
	AvatarProps;

const Avatar = forwardRef<HTMLDivElement, UseAvatarProps>(
	({ src, size = 'md', rounded = 'full', color = 'foreground' }, ref) => {
		const { image } = useImage(src);

		const picture = useMemo(() => {
			if (!image) return null;
			return (
				<motion.img
					src={image.src}
					className="avatar-image"
					alt="avatar"
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { duration: 0.125, ease: 'easeInOut' },
					}}
					exit={{ opacity: 0 }}
				/>
			);
		}, [src, image]);

		return (
			<div
				className={cn(
					'avatar',
					`avatar-size-${size}`,
					`avatar-rounded-${rounded}`,
					`avatar-color-${color}`
				)}
			>
				<AnimatePresence>{picture}</AnimatePresence>
			</div>
		);
	}
);
Avatar.displayName = 'Avatar';

export { Avatar };
