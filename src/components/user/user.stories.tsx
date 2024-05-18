import type { Meta } from '@storybook/react';
import { User, UserProps } from '.';

export default {
	title: 'Library/User',
	component: User,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="flex items-center justify-center w-full h-full">
				<Story />
			</div>
		),
	],
} as Meta<typeof User>;

export const Default = (props: UserProps) => (
	<User
		avatarProps={{
			src: 'https://i.scdn.co/image/ab6761610000e5ebd95cf4457fac4cc62311f84f',
		}}
		name="Jennie Kim"
		description="Singer at BLACKPINK"
		{...props}
	/>
);
