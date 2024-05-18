import type { Meta } from '@storybook/react';
import { MenuItem, MenuProps, MenuSeparator } from '.';
import { Menu } from './menu';

export default {
	title: 'Library/Menu',
	component: Menu,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<div className="flex items-center justify-center w-full h-full">
				<div className="w-52 p-2 overflow-hidden bg-white rounded-2xl ring-1 ring-neutral-200">
					<Story />
				</div>
			</div>
		),
	],
} as Meta<typeof Menu>;

export const Default = (props: MenuProps) => (
	<Menu {...props}>
		<MenuItem className="font-medium">Connexion</MenuItem>
		<MenuItem className="font-medium">Inscription</MenuItem>
		<MenuSeparator />
		<MenuItem color="berry">Mon compte</MenuItem>
	</Menu>
);
