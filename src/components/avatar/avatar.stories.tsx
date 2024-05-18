import type { Meta } from '@storybook/react';
import { AvatarProps } from '.';
import { Avatar } from './avatar';

export default {
	title: 'Library/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="flex items-center justify-center w-full h-full">
				<Story />
			</div>
		),
	],
} as Meta<typeof Avatar>;

export const Default = (props: AvatarProps) => <Avatar {...props} />;
