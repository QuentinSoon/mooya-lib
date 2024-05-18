'use client';

import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Avatar, AvatarProps } from '../avatar';
import { UserSizeProps } from './types';
import './user.css';

export type UserProps = {
	avatarProps?: AvatarProps;
	name?: string;
	description?: string | ReactNode;
	size?: UserSizeProps;
};

export type UseUserProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof UserProps
> &
	UserProps;

const User = forwardRef<HTMLDivElement, UseUserProps>(
	({ avatarProps, name, description, size = 'md' }, ref) => {
		return (
			<div className={cn('user', `user-size-${size}`)}>
				<Avatar size={avatarProps?.size ?? size} {...avatarProps} />
				<div className={cn('user-wrapper')}>
					<div className={cn('name')}>{name}</div>
					<div className={cn('description')}>{description}</div>
				</div>
			</div>
		);
	}
);
User.displayName = 'User';

export { User };
